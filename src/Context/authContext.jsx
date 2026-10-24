import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentEmail")
      ? { email: localStorage.getItem("currentEmail") }
      : null,
  );

  function signUp(username, email, password) {
    const storedUser = localStorage.getItem("user") || [];
    const users = storedUser ? JSON.parse(storedUser) : [];

    if (users.find((u) => u.email === email)) {
      return { success: false, message: "Email already exists" };
    }
    if (users.find((u) => u.username === username)) {
      return { success: false, message: "Email already exists" };
    }
    const newUser = { username, email, password };

    users.push(newUser);

    localStorage.setItem("user", JSON.stringify(users));
    localStorage.setItem("currentEmail", email);

    setUser({ email });
    return { success: true };
  }

  function logout() {
    localStorage.removeItem("currentEmail");
    setUser(null);
  }

  function login(email, password) {
    const storedUser = JSON.parse(localStorage.getItem("user")) || [];

    const user = storedUser.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      return { success: false, message: "Invalid email or password" };
    }

    localStorage.setItem("currentEmail", email);
    setUser({ email });

    return { success: true };
  }

  return (
    <AuthContext value={{ signUp, user, logout, login }}>
      {children}
    </AuthContext>
  );
}
