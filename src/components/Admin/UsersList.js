import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { User2, ShieldCheck, Mail } from "lucide-react-native";
import { COLORS } from "../../utils/constants";

export default function UsersList({ users }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registered Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <View style={styles.avatarCircle}>
              <User2 color="#ffffff" size={20} />
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.userName}>{item.name}</Text>
              <View style={styles.row}>
                <Mail size={14} color="#6B7280" />
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </View>

            <View style={styles.roleBadge(item.role)}>
              <ShieldCheck size={14} color="white" />
              <Text style={styles.roleText}>{item.role.toUpperCase()}</Text>
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
    paddingTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 12,
  },
  userCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  avatarCircle: {
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  email: {
    fontSize: 13,
    color: "#6B7280",
    marginLeft: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  roleBadge: (role) => ({
    backgroundColor:
      role === "admin" ? COLORS.primary : COLORS.success,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  }),
  roleText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});
