// In App.js in a new project

import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from "./src/navigators/TabNavigator";
import Home from "./src/screens/Home";
import Onboarding from "./src/screens/Onboarding";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator>
      <Stack.Navigator initialRouteName="Home">
        {/* The initialRouteName should be set to Onboarding as that is the Auth page but for the sake of jumping straight to the home and seeing the bottom navigation, I set it to Home */}
        <Stack.Screen name="Timeline" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      </Stack.Navigator>
      </TabNavigator>
    </NavigationContainer>
  );
};

export default App;
