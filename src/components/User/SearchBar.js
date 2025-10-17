import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Search } from "lucide-react-native";
import { COLORS } from "../../utils/constants";

export default function SearchBar({ query, setQuery }) {
  return (
    <View style={styles.container}>
      <Search color={COLORS.primary} size={20} style={{ marginRight: 8 }} />
      <TextInput
        style={styles.input}
        placeholder="Search news..."
        placeholderTextColor="#9CA3AF"
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },
});
