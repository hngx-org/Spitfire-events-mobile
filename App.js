// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/navigators/TabNavigator";
import Home from "./src/screens/Home";
import Onboarding from "./src/screens/Onboarding";

const App = () => {
  return (
    <NavigationContainer>
      {/* <TabNavigator /> */}
      <Onboarding />
    </NavigationContainer>
  );
};

export default App;
