import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import BottomTab from './src/navigation/BottomTab';
import Register from './src/pages/Register';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="BottomTab" 
                component={ BottomTab }  
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}

export default App;