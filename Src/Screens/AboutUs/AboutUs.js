import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../Components/Header/Header";
import About from "../../Components/AboutUs/About";
import OurValues from "../../Components/AboutUs/OurValues";
import AboutContent from "../../Components/AboutUs/AboutContent ";
import Footer from "../../Components/Footer/Footer";

const AboutScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={['top', 'left', 'right']}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}
                style={{ flex: 1, backgroundColor: "#FFFFFF" }} >
                <About />
                <OurValues />
                {/* <AboutContent /> */}
                <Footer />
            </ScrollView>
        </SafeAreaView>
    );
};

export default AboutScreen;
