import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const faqData = [
    {
        question: "What is GoBuild?",
        answer:
            "GoBuild is a platform that connects skilled workers and professionals like Architects, Interior Designers and Material Providers with customers who need various construction services. We make it easy to find trusted workers for your projects.",
    },
    {
        question: "How do I find the right professional for my project?",
        answer:
            "Simply browse our categories, view professional profiles, read reviews, and contact the ones that best match your needs. You can also post your project and let professionals come to you.",
    },
    {
        question: "Are all professionals verified?",
        answer:
            "Yes, all professionals on our platform go through a verification process including identity verification, skill assessment, and background checks to ensure quality and safety.",
    },
    {
        question: "How do payments work?",
        answer:
            "We offer secure payments. GoBuild charges 1% as platform fees from service providers. Payments are released after project completion.",
    },
    {
        question: "What if I'm not satisfied with the work?",
        answer:
            "You can raise a complaint via our dispute resolution system. Our team will help resolve the issue and offer protection policies where applicable.",
    },
    {
        question: "Can I become a professional on GoBuild?",
        answer:
            "Absolutely! Skilled workers and contractors can apply. You’ll need to complete verification and provide proof of your skills and experience.",
    },

];

const FAQScreen = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>

                <Text style={styles.header}>Frequently Asked Questions</Text>


                <Text style={styles.subHeader}>
                    Can’t find the answer you are looking for?
                </Text>
                <TouchableOpacity>
                    <Text style={styles.link}>Reach out to us</Text>
                </TouchableOpacity>


                {faqData.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <TouchableOpacity
                            style={[
                                styles.questionRow,
                                expandedIndex === index && styles.questionExpanded,
                            ]}
                            onPress={() => toggleExpand(index)}
                        >
                            <Text style={styles.question}>{item.question}</Text>
                            <Ionicons
                                name={expandedIndex === index ? "chevron-up" : "chevron-down"}
                                size={20}
                                color="#111827"
                            />
                        </TouchableOpacity>

                        {expandedIndex === index && (
                            <View style={styles.answerBox}>
                                <Text style={styles.answer}>{item.answer}</Text>
                            </View>
                        )}
                    </View>
                ))}

                <Text style={styles.footerText}>
                    Still have questions? We’re here to help!
                </Text>
                <TouchableOpacity style={styles.supportButton}>
                    <Text style={styles.supportButtonText}>Contact Support</Text>
                </TouchableOpacity>


                <View style={styles.footer}>

                    <View style={styles.footerLine} />

                    <View style={styles.socialIcons}>
                        <TouchableOpacity style={styles.iconButton}>
                            <FontAwesome name="facebook-square" size={28} color="#1877F2" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <FontAwesome name="instagram" size={28} color="#C13584" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <FontAwesome name="linkedin-square" size={28} color="#0A66C2" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <FontAwesome name="twitter-square" size={28} color="#1DA1F2" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.footerTextSecond}>© 2025 GoBuild. All rights reserved.</Text>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f9fafb",
        top: 30
    },

    scrollView: {
        padding: 16,
        paddingTop: 60
    },

    header: {
        fontSize: 33,
        fontWeight: "800",
        marginBottom: 16,
        color: "#000",
        lineHeight: 40,
    },

    subHeader: {
        fontSize: 18,
        color: "#4b5563",
        marginBottom: 20,
        fontWeight: '400'
    },

    link: {
        color: "#2563eb",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 20,
    },

    card: {
        marginBottom: 20,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#fff",
        elevation: 1,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
    },

    questionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 18,
        paddingHorizontal: 16,
    },

    questionExpanded: {
        backgroundColor: "#f9fafb",
    },

    question: {
        fontSize: 17,
        fontWeight: "600",
        color: "#111827",
        flex: 1,
        marginRight: 10,
        lineHeight: 20
    },

    answerBox: {
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 16,
    },

    answer: {
        fontSize: 15,
        color: "#4b5563",
        lineHeight: 26,
    },

    footerText: {
        textAlign: "center",
        fontSize: 15,
        color: "#4b5563",
        marginVertical: 20,
        fontWeight: "600"
    },

    supportButton: {
        backgroundColor: "#2563eb",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
        width: '50%',
        alignSelf: 'center',
    },

    supportButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },

    socialIcons: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
    },

    iconButton: {
        marginHorizontal: 10,
    },

    footer: {
        paddingVertical: 20,
        alignItems: "center",
        backgroundColor: "#f9fafb",
        marginBottom: 20
    },

    footerLine: {
        width: "90%",
        height: 1,
        backgroundColor: "#d1d5db",
        marginBottom: 10,
    },

    footerTextSecond: {
        textAlign: "center",
        fontSize: 14,
        color: "#9ca3af",
        marginVertical: 20,
        fontWeight: "600",
        lineHeight: 20
    }

});

export default FAQScreen;
