import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../Assets/Colors/Color";

const About = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}>
                <View style={styles.missionSection}>
                    <Image
                        source={require("../../Assets/Images/aboutUsImage.png")}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Our Mission</Text>
                    <Text style={styles.sectionContent}>
                        At GoBuild, we're on a mission to revolutionize access to services by
                        creating a platform that seamlessly connects skilled professionals
                        with customers in need.
                    </Text>
                    <Text style={styles.sectionContent}>
                        We believe everyone deserves access to quality services at fair prices,
                        while providing professionals with opportunities to grow their
                        business and showcase their expertise.
                    </Text>
                </View>

                {/* Inspirational Quote */}
                <View style={styles.quoteSection}>
                    <Text style={styles.quoteMark}>“</Text>
                    <Text style={styles.quoteText}>
                        The best way to find yourself is to lose yourself in the service of others.
                    </Text>
                    <Text style={styles.quoteAuthor}>- Mahatma Gandhi</Text>
                </View>

                {/* Button */}
                <TouchableOpacity
                    style={styles.contactButton}
                    onPress={() => navigation.navigate("Contact")}
                >
                    <Text style={styles.contactText}>Contact Us →</Text>
                </TouchableOpacity>

                {/* Logo Section */}
                <View style={styles.logoContainer}>
                    <View style={styles.logoBox}>
                        <Image
                            source={require("../../Assets/Logo/GoBuild.png")}
                            style={styles.logoImage}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.sinceBox}>
                        <Text style={styles.sinceText}>Since 2025</Text>
                        <Text style={styles.subText}>Serving communities</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    missionSection: {
        marginBottom: 30,
        backgroundColor: '#f7fafc',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#e3e8ee',
        padding: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 1,
    },

    container: {
        padding: 20,
        paddingBottom: 40,
    },

    section: {
        marginBottom: 30,
    },

    sectionHeading: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 10,
        color: "#000",
        textAlign: "left",
        lineHeight: 30,
    },

    sectionContent: {
        fontSize: 16,
        color: Colors.mutedForeground,
        lineHeight: 28,
        textAlign: "left",
    },

    sectionHeadingCenter: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 12,
        color: "#000",
        textAlign: "center",
        marginTop: 20,
        lineHeight: 30,
    },

    sectionContentCenter: {
        fontSize: 16,
        color: Colors.mutedForeground,
        lineHeight: 28,
        marginBottom: 20,
        textAlign: "center",
        paddingHorizontal: 10,
    },

    contactButton: {
        backgroundColor: "#007bff",
        paddingHorizontal: 25,
        paddingVertical: 13,
        borderRadius: 10,
        marginBottom: 60,
        elevation: 3,
        width: "40%",
    },

    contactText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "700",
    },

    logoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },

    logoBox: {
        backgroundColor: "#000",
        width: "90%",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
    },

    logoImage: {
        width: 350,
        height: 350,
    },
    quoteSection: {
        backgroundColor: '#e6f0fa',
        borderRadius: 16,
        padding: 22,
        marginBottom: 32,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 5,
        elevation: 1,
    },
    quoteMark: {
        fontSize: 48,
        color: '#2563eb',
        fontWeight: 'bold',
        marginBottom: -18,
        marginTop: -8,
    },
    quoteText: {
        fontSize: 20,
        color: '#22223b',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 10,
        marginHorizontal: 8,
        lineHeight: 30,
    },
    quoteAuthor: {
        fontSize: 16,
        color: '#2563eb',
        fontWeight: '600',
        alignSelf: 'flex-end',
    },

    sinceBox: {
        backgroundColor: "#2563eb",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        marginTop: -5,
        alignSelf: "flex-end",
        left: 10,
        marginBottom: 30,
    },

    sinceText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },

    subText: {
        color: "#fff",
        fontSize: 12,
    },

});

export default About;
