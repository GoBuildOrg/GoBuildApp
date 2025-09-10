import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import StatsSection from "./StatsSection";

const AboutContent = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* Stats Section */}
            <StatsSection />

            <View style={styles.sectionBox}>
                {/* Our Services */}
                <Text style={styles.sectionHeading}>Services</Text>
                <View style={styles.servicesList}>
                    {[
                        { name: "Carpenter", icon: "hammer-outline", color: "#FF7043" },
                        { name: "Mason", icon: "construct-outline", color: "#4CAF50" },
                        { name: "Helper", icon: "people-outline", color: "#2196F3" },
                        { name: "Tiles & Floor Work", icon: "grid-outline", color: "#9C27B0" },
                        { name: "Painter", icon: "color-palette-outline", color: "#FFC107" },
                        { name: "Labour", icon: "briefcase-outline", color: "#FF5722" },
                    ].map((item, index) => (
                        <TouchableOpacity key={index} style={styles.serviceRow}>
                            <View style={[styles.serviceIconBox, { backgroundColor: item.color }]}>
                                <Icon name={item.icon} size={24} color="#fff" />
                            </View>
                            <Text style={styles.serviceRowText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Company */}
                <Text style={styles.companyHeading}>Company</Text>
                <View style={styles.companyList}>
                    {[
                        { name: "About", icon: "business-outline" },
                        { name: "How It Works", icon: "help-circle-outline" },
                        { name: "Contact", icon: "call-outline" },
                    ].map((item, index) => (
                        <TouchableOpacity key={index} style={styles.companyCard}>
                            <View style={styles.companyIconBox}>
                                <Icon name={item.icon} size={22} color="#007BFF" />
                            </View>
                            <Text style={styles.companyText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={{ marginBottom: 30 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    sectionBox: {
        backgroundColor: "#007BFF",
        padding: 15,
        marginVertical: 20,
        elevation: 4
    },

    sectionHeading: {
        fontSize: 28,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 20,
        alignSelf: "center",
    },

    companyHeading: {
        fontSize: 28,
        fontWeight: "700",
        color: "#fff",
        marginTop: 30,
        marginBottom: 20,
        alignSelf: "center",
    },

    servicesList: {
        marginTop: 10,
        flexDirection: "column",
        gap: 12,
    },

    serviceRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 12,
    },

    serviceRowText: {
        fontSize: 16,
        color: "#333",
        fontWeight: "600",
        marginLeft: 12,
    },

    serviceIconBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    companyList: {
        marginTop: 10,
        flexDirection: "column",
        gap: 12,
    },

    companyCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 12,
    },

    companyIconBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#e6f0ff",
        justifyContent: "center",
        alignItems: "center",
    },

    companyText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginLeft: 12,
    },
});

export default AboutContent;
