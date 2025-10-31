import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { PlusCircle, Edit, Trash2, Calendar } from "lucide-react-native";
import NewsModal from "./NewsModal";
import { COLORS } from "../../utils/constants";

export default function ManageNews({ news, onCreate, onUpdate, onDelete }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const handleAddNews = () => {
    setSelectedNews(null);
    setModalVisible(true);
  };

  const handleEditNews = (item) => {
    setSelectedNews(item);
    setModalVisible(true);
  };

  const handleDeleteNews = (id) => {
    Alert.alert("Confirm Delete", "Are you sure you want to delete this news?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        onPress: () => onDelete(id),
        style: "destructive",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Manage News</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddNews}>
          <PlusCircle color="white" size={18} />
          <Text style={styles.addText}>Add News</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsCategory}>{item.category}</Text>
              <View style={styles.dateRow}>
                <Calendar color="#6B7280" size={14} />
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEditNews(item)}
              >
                <Edit color={COLORS.primary} size={18} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteNews(item.id)}
              >
                <Trash2 color={COLORS.danger} size={18} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <NewsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={(data) => {
          if (selectedNews) {
            onUpdate(selectedNews.id, data);
          } else {
            onCreate(data);
          }
          setModalVisible(false);
        }}
        editData={selectedNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  addText: {
    color: "white",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  newsTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  newsCategory: {
    fontSize: 13,
    color: "#6B7280",
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  dateText: {
    fontSize: 12,
    color: "#6B7280",
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: "#EEF2FF",
    padding: 8,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: "#FEE2E2",
    padding: 8,
    borderRadius: 8,
  },
});
