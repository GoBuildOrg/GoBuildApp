import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../Assets/Colors/Color";

const services = [
    {
        id: "1",
        title: "Welder",
        rating: 4.2,
        reviews: "124 Reviews",
        description:
            "Experienced welder specializing in residential and commercial welding repairs, installations, and maintenance.",
        available: true,
        image: require("../../Assets/Images/worker2.jpg"),
    },
    {
        id: "2",
        title: "Mason",
        rating: 4.3,
        reviews: "98 Reviews",
        description:
            "Skilled mason with expertise in bricklaying, concrete work, and stone masonry for residential and commercial projects.",
        available: true,
        image: require("../../Assets/Images/ppl7.jpg"),
    },
    {
        id: "3",
        title: "Carpenter",
        rating: 4.4,
        reviews: "86 Reviews",
        description:
            "Skilled carpenter offering custom furniture building, cabinet installation, and general woodworking services.",
        available: true,
        image: require("../../Assets/Images/carpenter.jpg"),
    },
    {
        id: "4",
        title: "Helper",
        rating: 4.6,
        reviews: "77 Reviews",
        description:
            "Reliable helper providing general assistance with construction, moving, and various manual labor tasks.",
        available: true,
        image: require("../../Assets/Images/ppl8.jpg"),
    },
    {
        id: "5",
        title: "Tiles and Floor work",
        rating: 4.6,
        reviews: "112 Reviews",
        description: "Professional worker for floor and tiles work of all kinds.",
        available: true,
        image: require("../../Assets/Images/tiles.png"),
    },
    {
        id: "6",
        title: "Steel Cutter",
        rating: 4.8,
        reviews: "64 Reviews",
        description:
            "Expert steel cutter specializing in precise metal cutting, fabrication, and installation for construction projects.",
        available: true,
        image: require("../../Assets/Images/steel_cutter2.jpg"),
    },
];

const ServiceCard = ({ item, selectedCardId, setSelectedCardId }) => (
    <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.content}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.ratingRow}>
                    <Icon name="star" size={16} color="#f5a623" style={{ marginRight: 4 }} />
                    <Text style={styles.rating}>{item.rating}</Text>
                    <Text style={styles.reviews}> ({item.reviews})</Text>
                </View>
            </View>

            <Text style={styles.description}>{item.description}</Text>

            <View style={styles.availableRow}>
                <Icon
                    name="time-outline"
                    size={16}
                    color="gray"
                    style={{ marginRight: 6 }}
                />
                <Text style={styles.available}>
                    {item.available ? "Available to start immediately" : "Not Available"}
                </Text>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={[
                        styles.viewButton,
                        selectedCardId === item.id && styles.activeViewButton,
                    ]}
                    onPress={() => setSelectedCardId(item.id)}
                >
                    <Text
                        style={[
                            styles.viewText,
                            selectedCardId === item.id && styles.activeViewText,
                        ]}
                    >
                        View Profile
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.bookText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const AvailableServices = () => {
    const [selectedFilter, setSelectedFilter] = useState("All Services");
    const [selectedCardId, setSelectedCardId] = useState(null);

    const filters = [
        "All Services",
        "Carpenter",
        "Mason",
        "Helper",
        "Steel Cutter",
        "Tiles and Floor work",
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <Text style={styles.header}>Available Services</Text>

                        {/* Horizontal Filter Row */}
                        <View style={styles.filterRow}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {filters.map((filter, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[
                                            styles.filterBtn,
                                            selectedFilter === filter && styles.activeFilterBtn,
                                        ]}
                                        onPress={() => setSelectedFilter(filter)}
                                    >
                                        <Text
                                            style={[
                                                styles.filterText,
                                                selectedFilter === filter && styles.activeFilterText,
                                            ]}
                                        >
                                            {filter}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </>
                }
                data={services}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ServiceCard
                        item={item}
                        selectedCardId={selectedCardId}
                        setSelectedCardId={setSelectedCardId}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 30 }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 20,
        color: "#000",
        lineHeight: 30,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    filterRow: {
        flexDirection: "row",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    filterBtn: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 12,
        marginBottom: 15,
    },
    filterText: {
        color: "#000",
    },
    activeFilterBtn: {
        backgroundColor: "#009688",
    },
    activeFilterText: {
        color: "#fff",
        fontWeight: "600",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: "#ddd",
        width: "95%",
        alignSelf: "center",
        marginBottom: 25,
        overflow: "hidden",
        elevation: 1,
    },
    image: {
        width: "100%",
        height: 200,
    },
    content: {
        padding: 20,
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 28,
        color: Colors.mutedForeground,
    },
    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    rating: {
        fontSize: 14,
        color: "#000",
    },

    reviews: {
        fontSize: 14,
        color: Colors.mutedForeground,
    },

    description: {
        fontSize: 14,
        color: "#64748b",
        marginBottom: 10,
        lineHeight: 20,
    },

    availableRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    available: {
        fontSize: 14,
        color: "#64748b",
    },

    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    viewButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        paddingVertical: 10,
        marginRight: 8,
        alignItems: "center",
    },

    activeViewButton: {
        backgroundColor: "#009688",
        borderColor: "#009688",
    },

    viewText: {
        color: "#000",
        fontWeight: "600",
    },

    activeViewText: {
        color: "#fff",
    },

    bookButton: {
        flex: 1,
        backgroundColor: "#007bff",
        borderRadius: 6,
        paddingVertical: 10,
        alignItems: "center",
    },

    bookText: {
        color: "#fff",
        fontWeight: "600",
    },
});

export default AvailableServices;
