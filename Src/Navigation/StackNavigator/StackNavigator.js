import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../../Screens/SplashScreen/SplashScreen";
import OnboardingScreen from "../../Screens/OnboardingScreen/OnboardingScreen";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import ProfessionalService from "../../Components/ProfessionalServices/ProfessionalServices";

const stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <stack.Navigator screenOptions={{ headerShown: false }} >
            <stack.Screen name="splash" component={SplashScreen} />
            <stack.Screen name="onBoarding" component={OnboardingScreen} />
            <stack.Screen name="Home" component={HomeScreen} />
            <stack.Screen name="Professional" component={ProfessionalService} />
        </stack.Navigator>
    )
}