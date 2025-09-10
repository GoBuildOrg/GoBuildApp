import React from "react";
import { ScrollView } from "react-native";

import About from "../../Components/AboutUs/About";
import OurValues from "../../Components/AboutUs/OurValues";
import AboutContent from "../../Components/AboutUs/AboutContent ";
import Footer from "../../Components/Footer/Footer";

const AboutScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: "#FFFFFF" }} >
            <About />
            <OurValues />
            <AboutContent />
            <Footer />
        </ScrollView>
    );
};

export default AboutScreen;
