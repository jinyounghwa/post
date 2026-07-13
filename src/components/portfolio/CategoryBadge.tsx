export default function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="doc-cell inline-flex items-center px-2 py-0.5 border border-blue/40 text-blue bg-blue/5">
      {label}
    </span>
  );
}
