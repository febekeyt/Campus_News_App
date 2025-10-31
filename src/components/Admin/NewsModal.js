import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { X, Save } from "lucide-react-native";
import { COLORS } from "../../utils/constants";

export default function NewsModal({ visible, onClose, onSave, editData }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setCategory(editData.category);
      setContent(editData.content);
    } else {
      setTitle("");
      setCategory("");
      setContent("");
    }
  }, [editData]);

  const handleSave = () => {
    if (!title || !category || !content) {
      alert("Please fill out all fields");
      return;
    }
    onSave({
      title,
      category,
      content,
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <View style={styles.header}>
            <Text style={styles.titleText}>
              {editData ? "Edit News" : "Add News"}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <X color="#6B7280" size={20} />
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="News Title"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder="Category"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            value={category}
            onChangeText={setCategory}
          />
          <TextInput
            placeholder="Content"
            placeholderTextColor="#9CA3AF"
            style={[styles.input, { height: 100, textAlignVertical: "top" }]}
            multiline
            value={content}
            onChangeText={setContent}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Save color="white" size={18} />
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
  },
  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#111827",
    marginBottom: 12,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    paddingVertical: 12,
    borderRadius: 10,
  },
  saveText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
