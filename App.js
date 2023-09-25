// In App.js in a new project

// Note: The stack navigator I commented out is for the authentication flow

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import PreviewStack from "./src/navigators/PreviewNavigation";
import { DataContextProvider } from "./src/context/DataContext";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {

  return (
      <NavigationContainer>
        <AuthProvider>
          <DataContextProvider>
            <PreviewStack />
          </DataContextProvider>
        </AuthProvider>
      </NavigationContainer>

  );
};

export default App;