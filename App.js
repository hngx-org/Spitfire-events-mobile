import React, {useContext, useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import TabNavigator from "./src/navigators/TabNavigator";

import AuthNavigator from "./src/navigators/AuthNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {AuthContext} from "../context/AuthContext";

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      console.log(userInfo)

      if (userInfo) {
        setUserInfo(userInfo);
      }
    } catch (e) {
      alert(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <NavigationContainer>
      {userInfo == null ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
