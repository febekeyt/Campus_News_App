import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LayoutDashboard, FileText, Users, LogOut } from "lucide-react-native";
import DashboardOverview from "./DashboardOverview";
import ManageNews from "./ManageNews";
import UsersList from "./UsersList";
import { COLORS } from "../../utils/constants";

export default function AdminDashboard({
  user,
  news,
  onLogout,
  onCreate,
  onUpdate,
  onDelete,
}) {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview news={news} />;
      case "manage":
        return (
          <ManageNews
            news={news}
            onCreate={onCreate}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      case "users":
        return <UsersList />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Admin Dashboard</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <LogOut color="white" size={18} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "overview" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("overview")}
        >
          <LayoutDashboard
            color={activeTab === "overview" ? "white" : COLORS.primary}
            size={18}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "overview" && styles.activeTabText,
            ]}
          >
            Overview
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "manage" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("manage")}
        >
          <FileText
            color={activeTab === "manage" ? "white" : COLORS.primary}
            size={18}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "manage" && styles.activeTabText,
            ]}
          >
            Manage News
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "users" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("users")}
        >
          <Users
            color={activeTab === "users" ? "white" : COLORS.primary}
            size={18}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "users" && styles.activeTabText,
            ]}
          >
            Users
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>{renderContent()}</View>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: COLORS.danger,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  logoutText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  activeTabButton: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.primary,
  },
  activeTabText: {
    color: "white",
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
