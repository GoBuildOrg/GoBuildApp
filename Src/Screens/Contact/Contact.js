import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
    const navigation = useNavigation();

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={['top', 'left', 'right']}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 80 }}
                showsVerticalScrollIndicator={false}
            >
                {/* ✅ Back Arrow */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={28} color="#2563eb" />
                </TouchableOpacity>

                <View style={styles.topImageWrapper}>
                    <Image
                        source={require("../../Assets/Images/contact.jpg")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.container}>
                    {/* Header */}
                    <Text style={styles.header}>Contact Us</Text>
                    <Text style={styles.subText}>
                        We’d love to hear from you! Reach out anytime.
                    </Text>

                    {/* Contact Info */}
                    <View style={styles.infoBox}>
                        {/* Emails */}
                        <View style={styles.section}>
                            <View style={styles.iconCircle}>
                                <MaterialIcons name="email" size={24} color="#2563eb" />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.label}>Email</Text>
                                <TouchableOpacity onPress={() => Linking.openURL("mailto:info@gobuild.in")}>
                                    <Text style={styles.infoText}>info@gobuild.in</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL("mailto:admin@gobuild.in")}>
                                    <Text style={styles.infoText}>admin@gobuild.in</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Phones */}
                        <View style={styles.section}>
                            <View style={styles.iconCircle}>
                                <Entypo name="phone" size={24} color="#34C759" />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.label}>Phone</Text>
                                <TouchableOpacity onPress={() => Linking.openURL("tel:+918899310111")}>
                                    <Text style={styles.infoText}>+91 88993 10111</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL("tel:+917051514790")}>
                                    <Text style={styles.infoText}>+91 70515 14790</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL("tel:+919596133638")}>
                                    <Text style={styles.infoText}>+91 95961 33638</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Address */}
                        <View style={styles.section}>
                            <View style={styles.iconCircle}>
                                <FontAwesome name="map-marker" size={24} color="#FF3B30" />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.label}>Address</Text>
                                <Text style={styles.infoText}>
                                    Front of Chaddha Classes,{"\n"}
                                    Rehari Colony,{"\n"}
                                    Jammu & Kashmir
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <Footer />
        </SafeAreaView>
    );
};

export default Contact;

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 10,
        borderRadius: 25,
        padding: 6,
    },
    topImageWrapper: {
        alignItems: "center",
    },
    logo: {
        width: 180,
        height: 180,
    },
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: "600",
        color: "#2563eb",
        lineHeight: 30,
        top: -35,
    },
    subText: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
        textAlign: "center",
        top: -20,
    },
    infoBox: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
    },
    section: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 25,
    },
    iconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#EAF0FF",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 6,
    },
    infoText: {
        fontSize: 15,
        color: "#555",
        marginBottom: 4,
    },

});
