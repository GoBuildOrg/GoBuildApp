import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfessionalService from "../../Components/ProfessionalServices/ProfessionalServices";
import Header from "../../Components/Header/Header";
import ApplyAsProfessional from "../../Components/ApplyAsProfessional/Form";
import AvailableServices from "../../Components/AvailableServices/AvailableServices";
import Footer from "../../Components/Footer/Footer";

const ServiceScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <Header />
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={{ paddingTop: 10, paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                <ProfessionalService />
                <ApplyAsProfessional />
                <AvailableServices />
                <Footer />
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
