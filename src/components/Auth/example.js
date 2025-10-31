import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Mail, Lock, Eye, EyeOff, LogIn, UserPlus } from "lucide-react-native";
import { COLORS } from "../../utils/constants";

export default function LoginScreen({ onLogin, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    const success = onLogin(email, password);
    if (!success) setError("Invalid email or password");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Campus News App</Text>
        <Text style={styles.headerSubtitle}>Stay informed with the latest campus updates</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Mail color={COLORS.primary} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock color={COLORS.primary} size={20} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff color={COLORS.primary} size={20} />
            ) : (
              <Eye color={COLORS.primary} size={20} />
            )}
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <LogIn color="white" size={18} />
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text style={{ color: "#6B7280" }}>Don’t have an account? </Text>
          <TouchableOpacity onPress={onSwitch}>
            <View style={styles.registerSwitch}>
              <UserPlus color={COLORS.primary} size={16} />
              <Text style={styles.registerText}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#E0E7FF",
    marginTop: 4,
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#111827",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 12,
    gap: 8,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },
  registerSwitch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  registerText: {
    color: COLORS.primary,
    fontWeight: "600",
  },
  errorText: {
    color: COLORS.danger,
    textAlign: "center",
    marginBottom: 10,
  },
  demoCredentials: {
    marginTop: 20,
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 10,
  },
  demoText: {
    color: "#6B7280",
    fontSize: 13,
    textAlign: "center",
  },
});
