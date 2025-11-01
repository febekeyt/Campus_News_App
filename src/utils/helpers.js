// Format a date into a readable string
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Limit text to a certain length (useful for NewsCard)
export function truncateText(text, limit = 100) {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}

// Simple email validation
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Generate a random unique ID
export function generateId(prefix = "id") {
  return ${prefix}-${Math.random().toString(36).substr(2, 9)};
}
