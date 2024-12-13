import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {BottomTab} from "./src/navigation/BottomTab";


const App = () => {
    return (
        <NavigationContainer>
            <BottomTab />
        </NavigationContainer>
    );
}

export default App;