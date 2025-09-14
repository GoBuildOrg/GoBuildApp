import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../integrations/supabase/client";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [focused, setFocused] = useState({
        email: false,
        password: false,
    });

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.log("Login Error:", error);
                Alert.alert("Error", error.message);
                return;
            }

            Alert.alert("Success", "Logged in successfully!");
            navigation.replace("Home");
        } catch (err) {
            console.log("Unexpected Error:", err);
            Alert.alert("Error", "Something went wrong!");
        }
    };

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "#F9FAFB" }}
            edges={["top", "left", "right"]}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    {/* Logo */}
                    <Text style={styles.logo}>
                        <Text style={styles.logoPrimary}>Go</Text>
                        <Text style={styles.logoAccent}>Build</Text>
                    </Text>

                    {/* Form */}
                    <View style={styles.formCard}>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput
                            style={[
                                styles.input,
                                focused.email && styles.inputFocused,
                            ]}
                            placeholder="Enter your Email"
                            placeholderTextColor="#9CA3AF"
                            value={email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            onFocus={() =>
                                setFocused({ ...focused, email: true })
                            }
                            onBlur={() =>
                                setFocused({ ...focused, email: false })
                            }
                        />

                        <Text style={styles.formLabel}>Password</Text>
                        <View
                            style={[
                                styles.input,
                                focused.password && styles.inputFocused,
                                { flexDirection: "row", alignItems: "center" },
                            ]}
                        >
                            <TextInput
                                style={{ flex: 1, fontSize: 14 }}
                                placeholder="Enter your Password"
                                placeholderTextColor="#9CA3AF"
                                value={password}
                                secureTextEntry={!showPassword}
                                onChangeText={setPassword}
                                onFocus={() =>
                                    setFocused({ ...focused, password: true })
                                }
                                onBlur={() =>
                                    setFocused({ ...focused, password: false })
                                }
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Ionicons
                                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                                    size={22}
                                    color="#6B7280"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Buttons */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleLogin}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.secondaryButton]}
                            onPress={() => navigation.navigate("onBoarding")}
                        >
                            <Text
                                style={[
                                    styles.buttonText,
                                    { color: "#2563EB" },
                                ]}
                            >
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: height * 0.15,
    },
    logo: {
        fontSize: width * 0.1,
        fontWeight: "900",
        letterSpacing: 1,
        marginBottom: 40,
        textAlign: "center",
    },
    logoPrimary: {
        color: "#007BFF",
    },
    logoAccent: {
        color: "#05C3DD",
    },
    formCard: {
        width: "100%",
        padding: 10,
    },
    formLabel: {
        fontSize: 14,
        color: "#333",
        marginBottom: 5,
        marginTop: 15,
    },
    input: {
        height: 50,
        borderWidth: 1.5,
        borderColor: "#E5E7EB",
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 14,
    },
    inputFocused: {
        borderColor: "#2563EB",
    },
    button: {
        backgroundColor: "#2563EB",
        paddingVertical: 16,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        marginBottom: 12,
        shadowColor: "#1E40AF",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
        top: 40,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: width * 0.045,
        fontWeight: "600",
        textAlign: "center",
    },
    secondaryButton: {
        backgroundColor: "#ffffff",
        borderWidth: 1.5,
        borderColor: "#2563EB",
    },
});
