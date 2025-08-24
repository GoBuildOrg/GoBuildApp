import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "../../Components/Header/Header";
import Categories from "../../Components/categories/Categories";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ServiceCard from "../../Components/ServiceCard/ServiceCard"
import ProfessionalService from "../../Components/ProfessionalServices/ProfessionalServices";
import WorkerService from "../../Components/WorkerServices/WorkerServices";

const HomeScreen = () => {
    return (
        <SafeAreaView style={style.safeArea}>
            <Header />
            <ScrollView
                style={style.scrollContainer}
                contentContainerStyle={{ paddingTop: 10 }}
                showsVerticalScrollIndicator={false}
            >
                <SearchBar />
                <Categories />
                <ServiceCard />
                <ProfessionalService />
                <WorkerService />
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    scrollContainer: {
        flex: 1,
    },

})
export default HomeScreen;
