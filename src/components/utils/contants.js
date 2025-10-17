// src/utils/constants.js

// Categories for filtering news
export const CATEGORIES = [
  { id: "all", name: "All News", icon: "megaphone", color: "#8B5CF6" },
  { id: "events", name: "Events", icon: "calendar", color: "#EC4899" },
  { id: "academics", name: "Academics", icon: "book", color: "#3B82F6" },
  { id: "sports", name: "Sports", icon: "trophy", color: "#10B981" },
];

// Global colors for theme
export const COLORS = {
  primary: "#6366F1", // Indigo
  secondary: "#8B5CF6", // Purple
  success: "#10B981", // Green
  danger: "#EF4444", // Red
  warning: "#F59E0B", // Amber
};

// News statuses (for urgent items, for example)
export const NEWS_STATUS = {
  urgent: "Urgent",
  normal: "Normal",
};
