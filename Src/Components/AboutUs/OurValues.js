import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const VALUES = [
    {
        key: "innovation",
        title: "Innovation",
        desc:
            "We embrace creativity and forward-thinking to continuously improve and evolve our platform.",
        icon: "light-bulb",
    },
    {
        key: "integrity",
        title: "Integrity",
        desc:
            "We operate with honesty and strong moral principles, ensuring ethical practices in all we do.",
        icon: "calendar",
    },
    {
        key: "collaboration",
        title: "Collaboration",
        desc:
            "We believe great things happen when people work together toward a shared goal.",
        icon: "add-user",
    },
    {
        key: "excellence",
        title: "Excellence",
        desc:
            "We're committed to delivering exceptional quality in everything, from platform features to customer support.",
        icon: "trophy",
    },
    {
        key: "trust",
        title: "Trust",
        desc:
            "We build trust through transparency, reliability, and always prioritizing our users' best interests.",
        icon: "shield",
    },
    {
        key: "community",
        title: "Community",
        desc:
            "We foster a supportive community where professionals and customers can connect and grow together.",
        icon: "heart-outlined",
    },
];

export default function OurValues() {
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                {/* Section Title */}
                <Text style={styles.sectionHeading}>Our Values</Text>

                {VALUES.map((item) => (
                    <View key={item.key} style={styles.card}>
                        <View style={styles.iconWrap}>
                            <Icon name={item.icon} size={28} color="#3B82F6" />
                        </View>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.desc}>{item.desc}</Text>
                    </View>
                ))}

                <View style={{ height: 24, marginBottom: 50 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#F8FAFC",
    },

    scroll: {
        flex: 1,
    },

    sectionHeading: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20,
        color: "#000",
        top: 30,
        lineHeight: 36
    },

    card: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        marginBottom: 25,
        backgroundColor: "#FFFFFF",
        elevation: 4,
        borderRadius: 5,
        marginHorizontal: 16,
        top: 40
    },

    iconWrap: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(59, 130, 246, 0.10)",
        marginBottom: 12,
    },

    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#0F172A",
        marginBottom: 6,
        textAlign: "center",
    },

    desc: {
        fontSize: 14,
        lineHeight: 20,
        color: "#64748B",
        textAlign: "center",
    },
});
