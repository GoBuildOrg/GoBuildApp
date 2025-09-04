import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import ProfessionalService from "../../Components/ProfessionalServices/ProfessionalServices";
import Header from "../../Components/Header/Header";
import ApplyAsProfessional from "../../Components/ApplyAsProfessional/Form";
import AvailableServices from "../../Components/AvailableServices/AvailableServices";

const ServiceScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={{ paddingTop: 10, paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                <ProfessionalService />
                <ApplyAsProfessional />
                <AvailableServices />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scrollContainer: {
        flex: 1,
    },
});

export default ServiceScreen;
