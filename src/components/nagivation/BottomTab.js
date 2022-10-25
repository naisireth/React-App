import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/HomeScreen";
import HelpCenterScreen from "../screens/HelpCenterScreen";
import SosScreen from "../screens/SosScreen";
import FormScreen from "../screens/FormScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FirstCard from "../screens/HomeScreenComponents/FirstCard";

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const BottomTab = () => {

    return (
        <Tab.Navigator
            tabBarPosition = "bottom"
            screenOptions={ ({ route }) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color}) => {
            let iconName = " ";

                switch (route.name){
                    case "Home":
                        iconName = focused ? "home" : "home-outline";
                        break;
                    case "Help Center":
                        iconName = focused ? "people" : "people-outline";
                        break;    
                    case "Ubicacion":
                        iconName = focused ? "locate" : "locate-outline";
                        break;  
                    case "Formulario":
                        iconName = focused ? "folder": "folder-outline";
                        break;
                    case "Configuracion":
                        iconName = focused ? "person": "person-outline";
                        break;       
                }

            return <Icon name={iconName} size={24} color = {color}/>;
                },
            tabBarActiveTintColor: '#202020',
            tabBarInactiveTintColor: '#757575',
            tabBarPressColor: "transparent",
            tabBarIndicatorStyle:{
                borderBottomColor: "#fff",
                borderBottomWidth: 2
            }
            })
        }
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Help Center" component={HelpCenterScreen} />
            <Tab.Screen name="Ubicacion" component={SosScreen} />
            <Tab.Screen name="Formulario" component={FormScreen} />
            <Tab.Screen name="Configuracion" component={SettingsScreen} />
        </Tab.Navigator>
    );
}