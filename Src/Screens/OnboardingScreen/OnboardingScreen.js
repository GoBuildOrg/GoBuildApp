import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
    SafeAreaView,
    Alert,
} from "react-native";

const { width, height } = Dimensions.get("window");

const OnBoardingScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [nameFocused, setNameFocused] = useState(false);
    const [phoneFocused, setPhoneFocused] = useState(false);

    const handleRegister = () => {
        if (!name || !phone) {
            Alert.alert("Error", "Please enter your Name and Phone");
            return;
        }
        Alert.alert("Success", "Registration completed!");
        navigation.replace("Home");
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
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
                            style={[styles.input, nameFocused && styles.inputFocused]}
                            placeholder="Enter your Name"
                            placeholderTextColor="#9CA3AF"
                            value={name}
                            onChangeText={setName}
                            onFocus={() => setNameFocused(true)}
                            onBlur={() => setNameFocused(false)}
                        />

                        <Text style={styles.formLabel}>Phone Number</Text>
                        <TextInput
                            style={[styles.input, phoneFocused && styles.inputFocused]}
                            placeholder="Enter your Phone"
                            placeholderTextColor="#9CA3AF"
                            value={phone}
                            keyboardType="phone-pad"
                            onChangeText={setPhone}
                            onFocus={() => setPhoneFocused(true)}
                            onBlur={() => setPhoneFocused(false)}
                        />

                        {/* Buttons */}
                        <TouchableOpacity style={styles.button} onPress={handleRegister}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.secondaryButton]}
                            onPress={() => navigation.replace("Home")}
                        >
                            <Text style={[styles.buttonText, { color: "#2563EB" }]}>Join Now</Text>
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
        borderColor: "#E5E7EB",
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
