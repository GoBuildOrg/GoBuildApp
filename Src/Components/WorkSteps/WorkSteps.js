import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../Assets/Colors/Color";


const steps = [
    {
        id: null, // ispe number nahi chahiye
        icon: "search-outline",
        title: "Find the Right Professional",
        description:
            "Search through our vast network of verified professionals based on your specific needs and project requirements.",
    },
    {
        id: 1,
        icon: "calendar-outline",
        title: "Book the Service",
        description:
            "Choose a convenient date and time from the professional's availability, and customize your booking to match your project needs.",
    },
    {
        id: 2,
        icon: "checkmark-done-outline",
        title: "Get the Job Done",
        description:
            "Meet your professional and complete your project to your satisfaction with our quality guarantee.",
    },
    {
        id: 3,
        icon: "star-outline",
        title: "Rate Your Experience",
        description:
            "Share your feedback and help others find the best professionals for their projects.",
    },
];

export default function WorkSteps() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>How GoBuild Works</Text>
                <Text style={styles.subheading}>
                    Finding and booking professional services has never been easier. Our
                    streamlined process ensures you get quality work with minimal hassle.
                </Text>

                {steps.map((step) => (
                    <View key={step.title} style={styles.stepContainer}>
                        {step.id && (
                            <View style={styles.numberCircle}>
                                <Text style={styles.numberText}>{step.id}</Text>
                            </View>
                        )}
                        <Ionicons
                            name={step.icon}
                            size={50}
                            color="#2563EB"
                            style={styles.icon}
                        />
                        <Text style={styles.stepTitle}>{step.title}</Text>
                        <Text style={styles.stepDescription}>{step.description}</Text>
                    </View>
                ))}


                <View style={styles.card}>
                    <Ionicons
                        name="shield-checkmark-outline"
                        size={40}
                        color="green"
                    />
                    <Text style={styles.cardTitle}>100% Satisfaction Guarantee</Text>
                    <Text style={styles.cardText}>
                        If you're not completely satisfied with the service, we'll work to
                        make it right or refund your payment. Your satisfaction is our top
                        priority.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50
    },

    container: {
        padding: 16,
    },

    heading: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 12,
        textAlign: "center",
        lineHeight: 35

    },

    subheading: {
        fontSize: 15,
        color: Colors.mutedForeground,
        textAlign: "center",
        marginBottom: 50,
        lineHeight: 24
    },

    stepContainer: {
        alignItems: "center",
        marginBottom: 25,
    },

    numberCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#2563EB",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },

    numberText: {
        color: "#2563EB",
        fontSize: 16,
        fontWeight: "bold",
    },

    icon: {
        marginBottom: 12,
    },

    stepTitle: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 6,
        lineHeight: 28,
    },

    stepDescription: {
        fontSize: 14,
        color: Colors.mutedForeground,
        textAlign: "center",
        paddingHorizontal: 7,
        lineHeight: 20
    },

    card: {
        backgroundColor: "#E6F4EA",
        padding: 16,
        borderRadius: 12,
        marginBottom: 30,
        alignItems: "center",
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginTop: 8,
        marginBottom: 4,
        lineHeight: 28,
    },

    cardText: {
        fontSize: 14,
        color: "#64748b",
        textAlign: "center",
    },

});
