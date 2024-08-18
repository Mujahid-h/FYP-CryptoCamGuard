import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { register } from "../api/authApi";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (fullName === "" || email === "" || mobile === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      const data = await register({ fullName, email, mobile, password });
      setEmail("");
      setFullName("");
      setMobile("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LinearGradient colors={["#001f3f", "#0074D9"]} style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("../../images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>CryptoCamGuard</Text>
      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Mobile"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={(text) => setMobile(text)}
      />
      <TextInput
        placeholder="New Password"
        placeholderTextColor="#aaa"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.alreadyAccountText}>Already have an account?</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#001f3f",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  alreadyAccountText: {
    color: "#00aaff",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});

export default SignUp;
