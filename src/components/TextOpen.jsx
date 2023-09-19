import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  OpenSans_400Regular_Italic,
  OpenSans_700Bold_Italic,
} from "@expo-google-fonts/open-sans";

export default ({ children, style, font }) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_400Regular_Italic,
    OpenSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    (async () => {
      return await SplashScreen.hideAsync();
    })();
  } else {
    return (
      <Text
        style={{
          ...style,
          // Changing the font family
          fontFamily: font ? font : "OpenSans_400Regular",
        }}
      >
        {children}
      </Text>
    );
  }
};
