import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "../TabNavigator/TabNavigator";
import About from "../../Screens/AboutUs/AboutUs";
import Contact from "../../Screens/Contact/Contact";
import CustomDrawer from "../../Components/CustomDrawer/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="HomeTabs" component={TabNavigator} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
    );
}
