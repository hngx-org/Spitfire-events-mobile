// In App.js in a new project

// Note: The stack navigator I commented out is for the authentication flow

import React, {useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";
import TabNavigator from "./src/navigators/TabNavigator";
// This below is just for testing, will be removed eventually
import Home from "./src/screens/Home";
import Onboarding from "./src/screens/Onboarding";
import Comments from "./src/screens/Comment";
import AuthNavigator from "./src/navigators/AuthNavigator";
import {AuthContext} from "./src/context/AuthContext";

const App = () => {
  // const {userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <TabNavigator />
    {/*<Home />*/}
       {/*<Onboarding /> */}
        {/* <Comments /> */}
      
      {/* <AuthNavigator/> */}
{/* {userInfo.token ? <TabNavigator /> : <AuthNavigator />} */}
      {/*</Stack.Navigator> */}

    </NavigationContainer>
  );
};

export default App;