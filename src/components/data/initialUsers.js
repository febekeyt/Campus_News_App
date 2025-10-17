export const initialUsers = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@campus.edu",
    password: "admin123", // In production, make sure to hash the password
    role: "admin",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "John Student",
    email: "student@campus.edu",
    password: "student123", // In production, make sure to hash the password
    role: "user",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Jane Doe",
    email: "jane.doe@campus.edu",
    password: "janedoe123", // In production, make sure to hash the password
    role: "user",
    createdAt: new Date().toISOString(),
  },
];