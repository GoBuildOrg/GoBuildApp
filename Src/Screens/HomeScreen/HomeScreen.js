import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header/Header";
import Categories from "../../Components/categories/Categories";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ServiceCard from "../../Components/ServiceCard/ServiceCard"
import ProfessionalService from "../../Components/ProfessionalServices/ProfessionalServices";
import WorkerService from "../../Components/WorkerServices/WorkerServices";
import WorkSteps from "../../Components/WorkSteps/WorkSteps";
import FAQScreen from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={style.safeArea} edges={['top', 'left', 'right']}>
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
                <WorkSteps />
                <FAQScreen />
                <Footer />
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
