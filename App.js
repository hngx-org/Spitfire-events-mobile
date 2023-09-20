// In App.js in a new project

import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import TabNavigator from "./src/navigators/TabNavigator";
import Home from "./src/screens/Home";
import Onboarding from "./src/screens/Onboarding";
import AuthNavigator from "./src/navigators/AuthNavigator";

const App = () => {
  return (
    <NavigationContainer>
      {/* <TabNavigator /> */}
      {/*<Home />*/}
      {/* <AuthNavigator/> */}
    </NavigationContainer>
  );
};

export default App;
