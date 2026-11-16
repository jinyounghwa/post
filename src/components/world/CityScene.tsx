"use client";

import { useLayoutEffect, useMemo, useRef, useState, type RefObject } from "react";
import { useRouter } from "next/navigation";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Stars } from "@react-three/drei";
import * as THREE from "three";
import type { PortfolioItem } from "@/lib/portfolio-shared";
import { bus, type Shot } from "./bus";

const AMBER = "#F0A500";
const BG = "#0A0A0A";

// 결정적 의사난수 (SSR/리렌더와 무관하게 같은 도시)
const rand = (i: number) => {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

// 프로젝트 타워 배치: 중심에서 나선형으로 퍼짐
const towerCell = (i: number) => {
  const r = 2.2 + i * 0.85;
  const a = i * 2.4;
  return [Math.round(Math.cos(a) * r), Math.round(Math.sin(a) * r)] as const;
};

const dummy = new THREE.Object3D();

function City({ radius, reduce }: { radius: number; reduce: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const done = useRef(false);
  const start = useRef<number | null>(null);

  const cells = useMemo(() => {
    const out: { x: number; z: number; h: number; d: number }[] = [];
    for (let x = -radius; x <= radius; x++) {
      for (let z = -radius; z <= radius; z++) {
        const i = out.length;
        const d = Math.hypot(x, z);
        const falloff = Math.max(0.15, 1 - d / (radius * 1.1));
        out.push({ x, z, d, h: 0.08 + rand(i) ** 4 * 3 * falloff });
      }
    }
    return out;
  }, [radius]);

  useLayoutEffect(() => {
    const m = mesh.current;
    if (!m) return;
    const c = new THREE.Color();
    cells.forEach((_, i) => {
      // 드문드문 불 켜진 블록 = 도면 위 하이라이트
      if (rand(i + 7) > 0.975) c.set(AMBER).multiplyScalar(0.55);
      else c.setHSL(0.09, 0.08, 0.07 + rand(i + 99) * 0.07);
      m.setColorAt(i, c);
    });
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  }, [cells]);

  // 도시가 중심에서 바깥으로 지어지는 인트로. 끝나면 매트릭스 갱신 중단
  useFrame(({ clock }) => {
    const m = mesh.current;
    if (!m || done.current) return;
    start.current ??= clock.elapsedTime;
    const t = reduce ? 1e3 : clock.elapsedTime - start.current;
    let finished = true;
    cells.forEach((cell, i) => {
      const k = THREE.MathUtils.clamp((t * 16 - cell.d) / 7, 0, 1);
      if (k < 1) finished = false;
      const h = Math.max(0.001, cell.h * (1 - (1 - k) ** 3));
      dummy.position.set(cell.x, h / 2, cell.z);
      dummy.scale.set(0.82, h, 0.82);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
    done.current = finished;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, cells.length]} frustumCulled={false}>
      <boxGeometry />
      <meshStandardMaterial roughness={0.85} metalness={0.15} />
    </instancedMesh>
  );
}

function Tower({ item, index, reduce }: { item: PortfolioItem; index: number; reduce: boolean }) {
  const router = useRouter();
  const group = useRef<THREE.Group>(null);
  const body = useRef<THREE.MeshStandardMaterial>(null);
  const cap = useRef<THREE.MeshBasicMaterial>(null);
  const [hovered, setHovered] = useState(false);
  const [x, z] = towerCell(index);
  const h = 3 + rand(index + 500) * 3;

  useFrame(({ clock }, dt) => {
    const g = group.current;
    if (!g || !body.current || !cap.current) return;
    const k = 1 - Math.exp(-6 * dt);
    const lit = hovered || bus.active === item.slug;
    body.current.emissiveIntensity += ((lit ? 0.9 : 0.12) - body.current.emissiveIntensity) * k;
    cap.current.opacity += ((lit ? 1 : 0.45) - cap.current.opacity) * k;
    // 도시 인트로 뒤에 순서대로 솟아오름
    const rise = reduce ? 1 : THREE.MathUtils.clamp(clock.elapsedTime * 1.4 - 1.2 - index * 0.12, 0, 1);
    g.scale.y = Math.max(0.001, 1 - (1 - rise) ** 3);
  });

  // 현재 페이지에 해당 카드가 있으면 스크롤, 없으면 포트폴리오 페이지로
  const pick = () => {
    const card = document.getElementById(`demo-${item.slug}`);
    if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
    else router.push(`/portfolio/#demo-${item.slug}`);
  };

  return (
    <group ref={group} position={[x, 0, z]}>
      <mesh
        position={[0, h / 2, 0]}
        onClick={(e) => {
          e.stopPropagation();
          pick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "";
        }}
      >
        <boxGeometry args={[0.86, h, 0.86]} />
        <meshStandardMaterial ref={body} color="#16130d" emissive={AMBER} emissiveIntensity={0.12} roughness={0.5} />
        <Edges color={AMBER} />
      </mesh>
      <mesh position={[0, h + 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.86, 0.86]} />
        <meshBasicMaterial ref={cap} color={AMBER} transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

const anchor = new THREE.Vector3();
const camTarget = new THREE.Vector3();
const lookTarget = new THREE.Vector3();

function Rig({ shots, items, labels, labelChapter, reduce }: {
  shots: Shot[];
  items: PortfolioItem[];
  labels: RefObject<(HTMLSpanElement | null)[]>;
  labelChapter?: number;
  reduce: boolean;
}) {
  const look = useRef(new THREE.Vector3(...shots[0][1]));
  const [camCurve, lookCurve] = useMemo(
    () => [0, 1].map((k) => new THREE.CatmullRomCurve3(shots.map((s) => new THREE.Vector3(...s[k])))),
    [shots],
  );

  useFrame((state, dt) => {
    const ch = bus.chapter;
    const u = THREE.MathUtils.clamp(ch / (shots.length - 1), 0, 1);
    camCurve.getPoint(u, camTarget);
    lookCurve.getPoint(u, lookTarget);
    if (!reduce) {
      camTarget.x += state.pointer.x * 0.8;
      camTarget.y += state.pointer.y * 0.5;
    }
    const k = 1 - Math.exp(-2.6 * Math.min(dt, 0.1));
    state.camera.position.lerp(camTarget, k);
    look.current.lerp(lookTarget, k);
    state.camera.lookAt(look.current);

    // 타워 라벨: labelChapter 근처에서만 보이도록, 화면 좌표로 투영
    const fade =
      labelChapter === undefined ? 0 : THREE.MathUtils.clamp(1.5 - Math.abs(ch - labelChapter) * 2, 0, 1);
    items.forEach((item, i) => {
      const el = labels.current[i];
      if (!el) return;
      const [x, z] = towerCell(i);
      anchor.set(x, 3 + rand(i + 500) * 3 + 0.5, z).project(state.camera);
      const visible = fade > 0 && anchor.z < 1;
      el.style.opacity = visible ? String(fade) : "0";
      if (visible) {
        const sx = ((anchor.x + 1) / 2) * state.size.width;
        const sy = ((1 - anchor.y) / 2) * state.size.height;
        el.style.transform = `translate(${sx}px, ${sy}px) translate(-50%, -100%)`;
      }
    });
  });
  return null;
}

export default function CityScene({ items, shots, labelChapter }: {
  items: PortfolioItem[];
  shots: Shot[];
  labelChapter?: number;
}) {
  const labels = useRef<(HTMLSpanElement | null)[]>([]);
  const [{ reduce, radius }] = useState(() => ({
    reduce: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    radius: window.innerWidth < 768 ? 13 : 20,
  }));
  const intro: [number, number, number] = reduce ? shots[0][0] : [30, 34, 40];

  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: intro, fov: 42, near: 0.1, far: 200 }}
        gl={{ antialias: true }}
        onCreated={({ camera }) => camera.lookAt(...shots[0][1])}
      >
        <color attach="background" args={[BG]} />
        <fog attach="fog" args={[BG, 20, 62]} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[-12, 7, -5]} intensity={2.2} color={AMBER} />
        <directionalLight position={[10, 14, 12]} intensity={0.55} color="#9db4ff" />
        <gridHelper args={[radius * 2 + 1, radius * 2 + 1, "#3a2c0c", "#1a1712"]} position={[0, 0.002, 0]} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[400, 400]} />
          <meshStandardMaterial color="#0d0c0a" roughness={1} />
        </mesh>
        <Stars radius={90} depth={40} count={reduce ? 800 : 1800} factor={3} fade speed={reduce ? 0 : 0.6} />
        <City radius={radius} reduce={reduce} />
        {items.map((item, i) => (
          <Tower key={item.slug} item={item} index={i} reduce={reduce} />
        ))}
        <Rig shots={shots} items={items} labels={labels} labelChapter={labelChapter} reduce={reduce} />
      </Canvas>
      {items.map((item, i) => (
        <span
          key={item.slug}
          ref={(el) => {
            labels.current[i] = el;
          }}
          className="pointer-events-none absolute left-0 top-0 whitespace-nowrap border border-[#F0A500]/60 bg-[#0A0A0A]/80 px-1.5 py-0.5 font-mono text-[10px] text-[#F0A500] opacity-0"
        >
          {String(i + 1).padStart(2, "0")} {item.categoryLabel}
        </span>
      ))}
    </div>
  );
}
