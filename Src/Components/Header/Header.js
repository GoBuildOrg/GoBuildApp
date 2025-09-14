import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={styles.left}
            >
                <Icon name="menu" size={26} color="#000" />
            </TouchableOpacity>

            <View style={styles.Logo}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeTabs', { screen: 'Home' })}>
                    <Text style={styles.title}>
                        <Text style={styles.titleFirst}>Go</Text>
                        <Text style={styles.titleSecond}>Build</Text>
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.right} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#ccc",
    },

    left: {
        width: 48,
        alignItems: "flex-start",
        justifyContent: "center"
    },

    right: {
        width: 48
    },

    Logo: {
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontSize: 24,
        fontWeight: "900",
        letterSpacing: 1
    },

    titleFirst: {
        color: "#007BFF"
    },

    titleSecond: {
        color: "#05C3DD"
    },

});
