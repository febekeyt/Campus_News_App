import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { User, Shield, UserCircle } from "lucide-react-native";
import { COLORS } from "../../utils/constants";
import { initialUsers } from "../../data/initialUsers";

export default function UsersList() {
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
        data={initialUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.iconWrapper}>
              {item.role === "admin" ? (
                <Shield color={COLORS.primary} size={22} />
              ) : (
                <UserCircle color={COLORS.secondary} size={22} />
              )}
            </View>
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
            <View style={styles.roleBadge(item.role)}>
              <Text style={styles.roleText(item.role)}>
                {item.role.toUpperCase()}

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
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    backgroundColor: "#EEF2FF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },O

  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontWeight: "600",
    fontSize: 15,
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
  roleBadge: (role) => ({
    backgroundColor: role === "admin" ? COLORS.primary : COLORS.success,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  }),
  roleText: (role) => ({
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  }),
});

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
