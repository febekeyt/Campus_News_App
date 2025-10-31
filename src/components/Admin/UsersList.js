import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { COLORS } from "../../utils/constants";

const getInitials = (name) => {
  const names = name.trim().split(" ");
  return names.map((n) => n[0]).join("").toUpperCase();
};

export default function UsersList({ users }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registered Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{getInitials(item.name)}</Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>

            <View
              style={[
                styles.roleBadge,
                {
                  backgroundColor:
                    item.role === "admin"
                      ? COLORS.primary
                      : COLORS.success,
                },
              ]}
            >
              <Text style={styles.roleText}>
                {item.role === "admin" ? "Admin" : "User"}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    backgroundColor: "#E0E7FF",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primary,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  email: {
    fontSize: 13,
    color: "#6B7280",
  },
  roleBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  roleText: {
    fontSize: 12,
    fontWeight: "600",
    color: "white",
    textTransform: "uppercase",
  },
});
