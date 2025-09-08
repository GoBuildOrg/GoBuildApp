import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const WorkerService = () => {
    const navigation = useNavigation();

    const services = [
        {
            id: "1",
            title: "Carpenter",
            description:
                "Expert carpentry services for all your wooden furniture, fixtures, and structural needs.",
            available: "42+ Available\nProfessionals",
            icon: "hammer-outline",
        },
        {
            id: "2",
            title: "Electrician",
            description:
                "Expert electrician service for all kinds of electrical work and maintenance",
            available: "22+ Available\nProfessionals",
            icon: "flash-outline",
        },
        {
            id: "3",
            title: "Tiles and Floor Work",
            description:
                "All types of tiles work and flooring solutions from expert workers.",
            available: "25+ Available\nProfessionals",
            icon: "apps-outline",
        },
        {
            id: "4",
            title: "Mason",
            description:
                "Expert masonry services for construction, repairs, and decorative stone work.",
            available: "28+ Available\nProfessionals",
            icon: "business-outline",
        },
        {
            id: "5",
            title: "Painter",
            description:
                "Professional painting services for interiors and exteriors with premium finishes.",
            available: "32+ Available\nProfessionals",
            icon: "color-palette-outline",
        },
        {
            id: "6",
            title: "Labour",
            description:
                "Labour and helper service of all kinds with current availability.",
            available: "120+ Available\nProfessionals",
            icon: "people-outline",
        },
    ];


    const renderCard = ({ item }) => (

        <View style={styles.card}>
            <Icon name={item.icon} size={30} color="#2563eb" style={styles.icon} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.footer}>
                <Text style={styles.available}>{item.available}</Text>

                <TouchableOpacity style={styles.bookNow}
                    onPress={() => navigation.navigate("Professional")}>
                    <Text style={styles.bookText}>Book Now</Text>
                    <Icon name="chevron-forward" size={18} color="#000" />
                </TouchableOpacity>

            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.SafeArea}>
            <View style={styles.Container}>
                <View style={styles.headerBox}>
                    <Text style={styles.heading}>Worker Services</Text>
                    <Text style={styles.subHeading}>
                        Find the right workers from our vast network who are ready to help
                        with your projects.
                    </Text>
                </View>

                <FlatList
                    data={services}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCard}
                    showsVerticalScrollIndicator={false}
                />

                <TouchableOpacity
                    style={styles.seeAllBtn}
                    onPress={() => navigation.navigate("Service")}
                >
                    <Text style={styles.seeAllText}>See All Services</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    SafeArea: {
        flex: 1,
        backgroundColor: "#f1f5f9",
    },

    Container: {
        flex: 1,
        paddingHorizontal: 16,
        marginBottom: 50
    },

    headerBox: {
        paddingVertical: 20,
        top: 10
    },

    heading: {
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 6,
        color: "#111827",
    },

    subHeading: {
        fontSize: 15,
        textAlign: "center",
        color: "#64748B",
        fontWeight: "400",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 25,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
        marginVertical: 10,
        top: 20,
    },

    icon: {
        marginBottom: 15,
    },

    title: {
        fontSize: 17,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 10,
    },

    description: {
        fontSize: 13,
        color: "#6b7280",
        lineHeight: 18,
        marginBottom: 14,
    },

    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    available: {
        fontSize: 13,
        color: "#6b7280",
    },

    bookNow: {
        flexDirection: "row",
        alignItems: "center",
    },

    bookText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#111827",
        marginRight: 4,
    },

    seeAllBtn: {
        backgroundColor: "#007BFF",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        top: 30,
        marginBottom: 50
    },

    seeAllText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },


});


export default WorkerService;
