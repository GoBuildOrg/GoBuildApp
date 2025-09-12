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

const { width, height } = Dimensions.get("window");

const OnBoardingScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [focused, setFocused] = useState({
        name: false,
        email: false,
        password: false,
    });

    const handleRegister = async () => {
        if (!name || !email || !password) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }

        try {
            // 1. SignUp user
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (signUpError) {
                console.log("Auth SignUp Error:", signUpError);
                Alert.alert("Error", signUpError.message);
                return;
            }

            const user = signUpData?.user;
            if (!user) {
                Alert.alert("Error", "User not created. Try again!");
                return;
            }

            // 2. Update profile
            const { error: profileError } = await supabase
                .from("profiles")
                .update({
                    full_name: name,
                })
                .eq("id", user.id);

            if (profileError) {
                console.log("Profile Update Error:", profileError);
                Alert.alert("Error", "Profile not updated!");
                return;
            }

            Alert.alert("Success", "Registration completed!");
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
                        <Text style={styles.formLabel}>Full Name</Text>
                        <TextInput
                            style={[styles.input, focused.name && styles.inputFocused]}
                            placeholder="Enter your Name"
                            placeholderTextColor="#9CA3AF"
                            value={name}
                            onChangeText={setName}
                            onFocus={() => setFocused({ ...focused, name: true })}
                            onBlur={() => setFocused({ ...focused, name: false })}
                        />

                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput
                            style={[styles.input, focused.email && styles.inputFocused]}
                            placeholder="Enter your Email"
                            placeholderTextColor="#9CA3AF"
                            value={email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            onFocus={() => setFocused({ ...focused, email: true })}
                            onBlur={() => setFocused({ ...focused, email: false })}
                        />

                        <Text style={styles.formLabel}>Password</Text>
                        <TextInput
                            style={[styles.input, focused.password && styles.inputFocused]}
                            placeholder="Enter your Password"
                            placeholderTextColor="#9CA3AF"
                            value={password}
                            secureTextEntry
                            onChangeText={setPassword}
                            onFocus={() => setFocused({ ...focused, password: true })}
                            onBlur={() => setFocused({ ...focused, password: false })}
                        />

                        {/* Buttons */}
                        <TouchableOpacity style={styles.button} onPress={handleRegister}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.secondaryButton]}
                            onPress={() => navigation.replace("Home")}
                        >
                            <Text style={[styles.buttonText, { color: "#2563EB" }]}>
                                Join Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default OnBoardingScreen;

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
