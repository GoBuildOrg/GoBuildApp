import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../Screens/SplashScreen/SplashScreen";
import OnboardingScreen from "../../Screens/OnboardingScreen/OnboardingScreen";
import ProfessionalService from "../../Components/ProfessionalServices/ProfessionalServices";
import DrawerNavigator from "../DrawerNavigator/DrawerNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="onBoarding" component={OnboardingScreen} />
            <Stack.Screen name="Professional" component={ProfessionalService} />
            <Stack.Screen name="Home" component={DrawerNavigator} />
        </Stack.Navigator>
    );
}
