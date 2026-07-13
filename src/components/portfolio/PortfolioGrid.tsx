"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/lib/portfolio-shared";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Map(items.map((item) => [item.category, item.categoryLabel])).entries()
  );

  const filtered = activeCategory
    ? items.filter((item) => item.category === activeCategory)
    : items;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          className={`tag ${activeCategory === null ? "active" : ""}`}
          onClick={() => setActiveCategory(null)}
        >
          전체 {items.length}
        </button>
        {categories.map(([category, label]) => (
          <button
            key={category}
            className={`tag ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(activeCategory === category ? null : category)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <PortfolioCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
