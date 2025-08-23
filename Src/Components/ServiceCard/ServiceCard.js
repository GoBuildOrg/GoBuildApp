import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ServiceCard = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.card}>
                <ImageBackground
                    source={require("../../Assets/Images/worker1.jpg")}
                    style={styles.imageBackground}
                    imageStyle={{ borderRadius: 16 }}
                >
                    <View style={styles.overlay} />

                    <View style={styles.content}>

                        <View style={styles.logoWrapper}>
                            <Icon name="construct-outline" size={20} color="#007bff" />
                        </View>

                        <View style={styles.textWrapper}>
                            <Text style={styles.title}>Carpentry Services</Text>
                            <Text style={styles.subtitle}>
                                20+ Skilled Professionals Available Now
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        top: 40
    },

    card: {
        margin: 16,
        borderRadius: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },

    imageBackground: {
        height: 250,
        justifyContent: "flex-end",
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.0)",
        borderRadius: 16,
    },

    content: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },

    logoWrapper: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },

    textWrapper: {
        flex: 1,
    },

    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
    },

    subtitle: {
        fontSize: 13,
        color: "#ddd",
        marginTop: 2,
    },

});

export default ServiceCard;
