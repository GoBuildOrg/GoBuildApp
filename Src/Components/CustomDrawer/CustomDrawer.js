import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
        >
            <View>
                {/* Profile Section */}
                <View style={styles.profileContainer}>
                    <Avatar
                        rounded
                        size={70}
                        source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
                    />
                    <Text style={styles.name}>Murtaza Ahmed</Text>
                    <Text style={styles.phone}>+91 1234567890</Text>
                </View>

                <View style={styles.divider} />

                {/* Menu Items */}
                <View style={styles.menuContainer}>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => props.navigation.navigate("Contact")}
                    >
                        <Ionicons name="call-outline" size={22} color="#05C3DD" style={styles.icon} />
                        <Text style={styles.menuText}>Contact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => props.navigation.navigate("About")}
                    >
                        <Ionicons name="information-circle-outline" size={22} color="#05C3DD" style={styles.icon} />
                        <Text style={styles.menuText}>About Us</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Logout Button */}
            <TouchableOpacity
                style={styles.logoutContainer}
                onPress={() => {

                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: "onBoarding" }],
                    });
                }}
            >
                <Ionicons name="exit-outline" size={22} color="#FF4D4D" style={styles.icon} />
                <Text style={[styles.menuText, { color: "#FF4D4D" }]}>Logout</Text>
            </TouchableOpacity>


        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: "center",
    },

    name: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10,
        color: "#333",
    },

    phone: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },

    divider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 15,
    },

    menuContainer: {
        paddingHorizontal: 20,
    },

    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
    },

    icon: {
        marginRight: 15,
    },

    menuText: {
        fontSize: 16,
        color: "#333",
    },

    logoutContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },

});
