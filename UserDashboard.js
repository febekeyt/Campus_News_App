import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Bell, Search } from "lucide-react-native";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";
import NewsCard from "./NewsCard";
import { COLORS } from "../../utils/constants";

export default function UserDashboard({ user, news }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const filteredNews = news.filter((item) => {
    const matchCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Campus News</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
            <Search color="white" size={22} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Bell color="white" size={22} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      {showSearch && (
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      )}

      {/* Category Filter */}
      <CategoryFilter
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      {/* News List */}
      <ScrollView style={styles.newsList}>
        {filteredNews.length === 0 ? (
          <Text style={styles.noNewsText}>No news found</Text>
        ) : (
          filteredNews.map((item) => <NewsCard key={item.id} item={item} />)
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  appTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },
  newsList: {
    padding: 16,
  },
  noNewsText: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 20,
  },
});
