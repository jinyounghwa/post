"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import StarCard from "./StarCard";
import SearchBox from "./SearchBox";

interface StarRepo {
  name: string;
  link: string;
  description: string;
  reason: string;
  categorySlug: string;
  categoryTitle: string;
}

interface StarListProps {
  repos: StarRepo[];
  categories: { slug: string; category: string }[];
}

export default function StarList({ repos, categories }: StarListProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const uniqueCategories = useMemo(() => {
    const cats = categories.map((c) => ({ slug: c.slug, name: c.category }));
    const seen = new Set<string>();
    return cats.filter((c) => {
      if (seen.has(c.slug)) return false;
      seen.add(c.slug);
      return true;
    });
  }, [categories]);

  const fuse = useMemo(
    () =>
      new Fuse(repos, {
        keys: [
          { name: "name", weight: 0.3 },
          { name: "description", weight: 0.3 },
          { name: "reason", weight: 0.2 },
          { name: "categoryTitle", weight: 0.2 },
        ],
        threshold: 0.4,
      }),
    [repos]
  );

  const filtered = useMemo(() => {
    let results = repos;

    if (activeCategory) {
      results = results.filter((r) => r.categorySlug === activeCategory);
    }

    if (query.trim()) {
      const fuseResults = fuse.search(query);
      const fuseSlugs = new Set(fuseResults.map((r) => r.item.name));
      results = results.filter((r) => fuseSlugs.has(r.name));
    }

    return results;
  }, [repos, activeCategory, query, fuse]);

  return (
    <div>
      {/* Search */}
      <SearchBox query={query} onQueryChange={setQuery} />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`tag ${!activeCategory ? "active" : ""}`}
        >
          All
        </button>
        {uniqueCategories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() =>
              setActiveCategory(activeCategory === cat.slug ? null : cat.slug)
            }
            className={`tag ${activeCategory === cat.slug ? "active" : ""}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((repo) => (
          <StarCard
            key={`${repo.categorySlug}-${repo.name}`}
            {...repo}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sub py-12 font-mono text-sm">
          검색 결과가 없습니다.
        </p>
      )}
    </div>
  );
}
