import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Take from "../pages/Take";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Tab = createBottomTabNavigator();

const BottomTab = () => {

    return (
        <Tab.Navigator  
            screenOptions={{
                tabBarStyle: { height: 60 },
                tabBarActiveTintColor: '#6650a3',
                tabBarStyle: { backgroundColor: '#f8f8f8' },
        }}>
            
            <Tab.Screen 
                name="Inicio" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Estadisticas" 
                component={Statistics} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bar-chart" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Medir" 
                component={Take} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Ajustes" 
                component={Settings} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="cog" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Perfil" 
                component={Profile} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }} 
            />
        </Tab.Navigator>
    );
}

export default BottomTab;