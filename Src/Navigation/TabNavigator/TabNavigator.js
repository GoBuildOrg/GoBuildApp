import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import ServiceScreen from "../../Screens/ServiceScreen/ServiceScreen";
import ProfileScreen from "../../Screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === "Home") {
                        return (
                            <IonIcon
                                name={focused ? "home" : "home-outline"}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === "Service") {
                        return <IonIcon name="build-outline" size={size} color={color} />;
                    } else if (route.name === "Profile") {
                        return (
                            <IonIcon name="person-circle-outline" size={size} color={color} />
                        );
                    }
                },
                tabBarActiveTintColor: "#05C3DD",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    backgroundColor: "#fff",
                    height: 60,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
            <Tab.Screen
                name="Service"
                component={ServiceScreen}
                options={{ title: "Services" }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.openDrawer();
                    },
                }}
                options={{ title: "Profile" }}
            />
        </Tab.Navigator>
    );
}
