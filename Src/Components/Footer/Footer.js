import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const Footer = () => {
    return (
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
    );
};

const styles = StyleSheet.create({

    socialIcons: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
    },

    iconButton: {
        marginHorizontal: 10,
    },

    footer: {
        alignItems: "center",
    },

    footerLine: {
        width: "95%",
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

export default Footer;
