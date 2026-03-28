"use client";

interface TagFilterProps {
  allTags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export default function TagFilter({ allTags, activeTag, onTagChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onTagChange(null)}
        className={`tag ${!activeTag ? "active" : ""}`}
      >
        All
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(activeTag === tag ? null : tag)}
          className={`tag ${activeTag === tag ? "active" : ""}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
