import { useState, useEffect } from "react";
import { initialNews } from "../data/initialNews";

export function useNews() {
  const [newsList, setNewsList] = useState(initialNews);
  const [filteredNews, setFilteredNews] = useState(initialNews);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // 🔍 Filtering logic
  useEffect(() => {
    let results = newsList;

    if (activeCategory !== "all") {
      results = results.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim() !== "") {
      results = results.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredNews(results);
  }, [activeCategory, searchQuery, newsList]);

  // ➕ Add new article
  const addNews = (newArticle) => {
    setNewsList((prev) => [
      ...prev,
      { id: Date.now().toString(), ...newArticle },
    ]);

  };

  // ✏️ Edit article
  const editNews = (id, updatedData) => {
    setNewsList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };

  // ❌ Delete article
  const deleteNews = (id) => {
    setNewsList((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    newsList,
    filteredNews,
    activeCategory,
    searchQuery,
    setActiveCategory,
    setSearchQuery,
    addNews,
    editNews,
    deleteNews,
  };
}
item.id
