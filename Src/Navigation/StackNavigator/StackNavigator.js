import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { supabase } from "../../integrations/supabase/client";

import SplashScreen from "../../Screens/SplashScreen/SplashScreen";
import OnboardingScreen from "../../Screens/OnboardingScreen/OnboardingScreen";
import ProfessionalService from "../../Components/ProfessionalServices/ProfessionalServices";
import DrawerNavigator from "../DrawerNavigator/DrawerNavigator";
import LoginScreen from "../../Screens/OnboardingScreen/LoginScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);

    useEffect(() => {
        // 1️ Check if user already logged in
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            setSession(data.session);
            setLoading(false);
        };
        checkSession();

        //  Listen for login/logout changes
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    if (loading) {
        return <SplashScreen />;
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {session ? (

                <Stack.Screen name="Home" component={DrawerNavigator} />
            ) : (

                <>
                    <Stack.Screen name="splash" component={SplashScreen} />
                    <Stack.Screen name="onBoarding" component={OnboardingScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </>
            )}
            <Stack.Screen name="Professional" component={ProfessionalService} />
        </Stack.Navigator>
    );
}
