import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Categories = () => {

    const Services = ["Mason", "Helper", "Welder", "Steel Cutter"]

    return (
        <SafeAreaView style={styles.Container} >
            <ScrollView horizontal showsVerticalScrollIndicator={false} >
                <View style={styles.row}>
                    {Services.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.categoryBox}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    Container: {
        top: 20
    },

    row: {
        flexDirection: 'row',
        padding: 10
    },

    categoryBox: {
        backgroundColor: "#EBEFF4",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginRight: 10,
    },
})

export default Categories;