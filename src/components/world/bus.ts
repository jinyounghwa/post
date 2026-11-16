/** DOM → 3D 씬으로 매 프레임 넘기는 값. 리렌더 없이 공유 (한 번에 한 페이지만 씬을 띄움) */
export interface SceneBus {
  chapter: number; // 0..shots.length-1 사이 실수 (스크롤 위치)
  active: string | null; // 호버 중인 데모 slug → 해당 타워 점등
}

export const bus: SceneBus = { chapter: 0, active: null };

export type Shot = [pos: [number, number, number], look: [number, number, number]];

// 홈 섹션(챕터)별 카메라 위치 / 시선. Home의 섹션 순서와 1:1 대응
export const HOME_SHOTS: Shot[] = [
  [[16, 10, 18], [-5, 0, 0]], // 00 hero
  [[9, 4, 13], [-2, 1.5, 0]], // 01 strengths
  [[-4, 15, 21], [-2, 0.5, -1]], // 02 demos: 타워 12개가 한눈에
  [[-15, 3.5, -3], [0, 2, 0]], // 03 about
  [[2, 20, 7], [-3, 0, 0]], // 04 process: 도면처럼 내려다보기
  [[13, 5, -12], [0, 1.5, 0]], // 05 stack
  [[0.5, 34, 6], [-3, 0, 0]], // 06 contact: 상공으로 상승
];

// 하위 페이지: 스크롤 0→1 동안 두 시점 사이를 이동
const NEWS_SHOTS: Shot[] = [
  [[2, 24, 9], [-2, 0, 0]], // 도면처럼 내려다보기
  [[-9, 20, -6], [0, 0, 0]],
];
const PAGE_SHOTS: [prefix: string, shots: Shot[]][] = [
  ["/portfolio", [
    [[-4, 15, 21], [0, 1, 0]],
    [[-17, 9, 6], [0, 1.5, 0]],
  ]],
  ["/about", [
    [[-15, 3.5, -3], [0, 2, 0]], // 골목 높이에서
    [[-5, 2.8, -15], [2, 2.5, 0]],
  ]],
  ["/stars", [
    [[8, 2.5, 15], [0, 14, -30]], // 하늘(별)을 올려다보기
    [[-8, 2.5, 15], [0, 18, -30]],
  ]],
];

export const shotsFor = (pathname: string) =>
  PAGE_SHOTS.find(([prefix]) => pathname.startsWith(prefix))?.[1] ?? NEWS_SHOTS;
