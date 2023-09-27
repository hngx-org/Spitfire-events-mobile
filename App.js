import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {DataContextProvider} from "./src/context/DataContext";
import {AuthProvider} from "./src/context/AuthContext";

import {ClerkProvider, SignedIn, SignedOut} from "@clerk/clerk-expo";
import Constants from "expo-constants";
import TabNavigator from "./src/navigators/TabNavigator";
import AuthNavigator from "./src/navigators/AuthNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <ClerkProvider
        publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
      >
        <DataContextProvider>
          <SignedIn>
            <TabNavigator/>
          </SignedIn>
          <SignedOut>
            <AuthNavigator/>
          </SignedOut>
        </DataContextProvider>
      </ClerkProvider>
    </NavigationContainer>
  );
};

export default App;
