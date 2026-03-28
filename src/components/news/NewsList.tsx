"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";
import TagFilter from "./TagFilter";

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
}

interface NewsListProps {
  news: NewsItem[];
  allTags: string[];
}

export default function NewsList({ news, allTags }: NewsListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredNews = activeTag
    ? news.filter((item) => item.tags.includes(activeTag))
    : news;

  return (
    <div>
      <TagFilter allTags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />

      <div className="space-y-4">
        {filteredNews.map((item) => (
          <NewsCard key={item.slug} {...item} />
        ))}
      </div>

      {filteredNews.length === 0 && (
        <p className="text-center text-sub py-12 font-mono text-sm">
          해당 태그의 뉴스가 없습니다.
        </p>
      )}
    </div>
  );
}
