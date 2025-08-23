import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../../Components/Header/Header";
import Categories from "../../Components/categories/Categories";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ServiceCard from "../../Components/ServiceCard/ServiceCard"

const HomeScreen = () => {
    return (
        <View style={style.Container}>
            <Header />
            <SearchBar />
            <Categories />
            <ServiceCard />
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})
export default HomeScreen;