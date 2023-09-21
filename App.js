// In App.js in a new project

import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import TabNavigator from "./src/navigators/TabNavigator";
// This below is just for testing, will be removed eventually
import Home from "./src/screens/Home";
import Onboarding from "./src/screens/Onboarding";
import Comments from "./src/screens/Comment";





const App = () => {
  return (
    <NavigationContainer>
      {/* <TabNavigator /> */}
      {/* <Home /> */}
      {/* <Onboarding /> */}
        {/* <Comments /> */}
    </NavigationContainer>
  );
};

export default App;