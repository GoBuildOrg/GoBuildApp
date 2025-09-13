import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Footer = () => {

    const openLink = async (url) => {
        console.log("Trying to open:", url);
        try {
            await Linking.openURL(url);  // ✅ Direct open (no canOpenURL)
        } catch (err) {
            console.error("Error opening URL:", err);
        }
    };

    return (
        <View style={styles.footer}>
            <View style={styles.footerLine} />

            <View style={styles.socialIcons}>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() =>
                        openLink(
                            "https://www.facebook.com/profile.php?id=61575209711749&rdid=JTYVbMh4ok4a5cCN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1aECBVh8hC%2F#"
                        )
                    }
                >
                    <FontAwesome name="facebook-square" size={28} color="#1877F2" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => openLink("https://www.instagram.com/gobuild_in/")}
                >
                    <FontAwesome name="instagram" size={28} color="#C13584" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => openLink("https://in.linkedin.com/company/gobuildin")}
                >
                    <FontAwesome name="linkedin-square" size={28} color="#0A66C2" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => openLink("")}
                >
                    <FontAwesome name="twitter-square" size={28} color="#1DA1F2" />
                </TouchableOpacity>
            </View>

            <Text style={styles.footerTextSecond}>
                © 2025 GoBuild. All rights reserved.
            </Text>
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
        lineHeight: 20,
    },
});

export default Footer;
