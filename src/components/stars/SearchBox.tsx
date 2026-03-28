"use client";

interface SearchBoxProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export default function SearchBox({ query, onQueryChange }: SearchBoxProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="레포지토리 검색..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="w-full md:max-w-sm bg-card border border-border rounded-lg px-4 py-3 text-sm font-mono text-foreground placeholder:text-sub/50 focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
