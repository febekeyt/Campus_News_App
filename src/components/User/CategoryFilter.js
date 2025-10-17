import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { CATEGORIES, COLORS } from "../../utils/constants";
import { Icon } from "lucide-react-native";

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingHorizontal: 12 }}
    >
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        const IconComp = require("lucide-react-native")[cat.icon];
        return (
          <TouchableOpacity
            key={cat.id}
            style={[
              styles.categoryButton,
              { backgroundColor: isActive ? cat.color : "#E5E7EB" },
            ]}
            onPress={() => setActiveCategory(cat.id)}
          >
            <IconComp
              color={isActive ? "white" : cat.color}
              size={16}
              style={{ marginRight: 6 }}
            />
            <Text
              style={[
                styles.categoryText,
                { color: isActive ? "white" : cat.color },
              ]}
            >
              {cat.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "600",
  },
});
