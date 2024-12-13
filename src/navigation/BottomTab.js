import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Take from "../pages/Take";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const HeartIcon = ({ color, size }) => {
    
    return (
        <Animatable.View 
                animation="pulse" 
                iterationCount="infinite" 
                duration={800} 
                style={{ transform: [{ scale: 1.2 }] }} >
                    <Icon name="heart" size={size} color={color} />
        </Animatable.View>
        );
};

export const BottomTab = () => {

    return (
        <Tab.Navigator style >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Statistics" 
                component={Statistics} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bar-chart" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Take" 
                component={Take} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <HeartIcon name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="cog" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Profile" 
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