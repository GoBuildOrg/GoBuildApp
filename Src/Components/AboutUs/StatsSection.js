import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StatsSection = () => {
    return (
        <>
            <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>1000+</Text>
                    <Text style={styles.statLabel}>Registered Users</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>50+</Text>
                    <Text style={styles.statLabel}>Happy Clients</Text>
                </View>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>9+</Text>
                    <Text style={styles.statLabel}>Service Categories</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>4.2/5</Text>
                    <Text style={styles.statLabel}>Average Rating</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15
    },

    statCard: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: "#f1f8ff",
        padding: 18,
        borderRadius: 12,
        alignItems: "center",
        elevation: 2,
    },

    statNumber: {
        fontSize: 20,
        fontWeight: "700",
        color: "#007BFF",
    },

    statLabel: {
        fontSize: 13,
        color: "#555",
        marginTop: 4,
        textAlign: "center",
    },

});

export default StatsSection;
