import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Newspaper, Users, Folder } from "lucide-react-native";
import { COLORS } from "../../utils/constants";

export default function DashboardOverview({ news = [] }) {
  // ✅ Always have a default array if undefined
  const totalNews = news?.length || 0;
  const totalCategories = new Set(news?.map((n) => n.category)).size || 0;
  const recentNews = news?.length ? [...news].slice(-3).reverse() : [];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Overview</Text>

      {/* Summary Cards */}
      <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: "#EEF2FF" }]}>
          <Newspaper color={COLORS.primary} size={22} />
          <Text style={styles.cardValue}>{totalNews}</Text>
          <Text style={styles.cardLabel}>Total News</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#ECFDF5" }]}>
          <Folder color={COLORS.success} size={22} />
          <Text style={styles.cardValue}>{totalCategories}</Text>
          <Text style={styles.cardLabel}>Categories</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#FEF3C7" }]}>
          <Users color={COLORS.warning} size={22} />
          <Text style={styles.cardValue}>12</Text>
          <Text style={styles.cardLabel}>Active Users</Text>
        </View>
      </View>

      {/* Recent News */}
      <Text style={styles.sectionTitle}>Recent News</Text>
      <FlatList
        data={recentNews}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsCategory}>{item.category}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ color: "#6B7280", textAlign: "center" }}>
            No news available yet.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    paddingVertical: 20,
    marginHorizontal: 5,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 4,
  },
  cardLabel: {
    color: "#6B7280",
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.primary,
    marginBottom: 10,
  },
  newsItem: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  newsTitle: {
    fontWeight: "600",
    color: "#111827",
  },
  newsCategory: {
    fontSize: 12,
    color: "#6B7280",
  },
});
