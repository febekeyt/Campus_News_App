import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Clock } from "lucide-react-native";
import { COLORS } from "../../utils/constants";
import { formatDate, truncateText } from "../../utils/helpers";

export default function NewsCard({ item }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />

      {item.urgent && (
        <View style={styles.urgentBadge}>
          <Text style={styles.urgentText}>URGENT</Text>
        </View>
      )}

      <View style={styles.content}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </Text>
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.excerpt}>{truncateText(item.content, 80)}</Text>

        <View style={styles.footer}>
          <View style={styles.dateRow}>
            <Clock color={COLORS.secondary} size={14} />
            <Text style={styles.dateText}>{formatDate(item.date)}</Text>
          </View>
          <TouchableOpacity style={styles.readMore}>
            <Text style={styles.readMoreText}>Read More →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginVertical: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 160,
  },
  urgentBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: COLORS.danger,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  urgentText: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
  content: {
    padding: 14,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.secondary + "22",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 6,
  },
  categoryText: {
    color: COLORS.secondary,
    fontSize: 12,
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  excerpt: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dateText: {
    fontSize: 12,
    color: "#6B7280",
  },
  readMore: {
    backgroundColor: COLORS.primary + "15",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  readMoreText: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.primary,
  },
});
