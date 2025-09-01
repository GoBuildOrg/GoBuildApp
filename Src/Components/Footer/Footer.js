import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>© 2025 Murtaza App. All rights reserved.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        padding: 15,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },

    text: {
        fontSize: 14,
        color: '#333',
    },
});

export default Footer;
