import { SafeAreaView, StyleSheet, Text, View, Platform, Image } from "react-native";
import React from "react";
import CustomBouton from "../components/onboarding/Bouton";
import Constants from "expo-constants";
import colors from "../layouts/colors";
import font from "../layouts/fonts";
import TextOpen from "../components/TextOpen";
import { StatusBar } from "expo-status-bar";

const Onboarding = () => {
  const handleLoginWithGoogle = () => {
    // Authentification Google
    console.log("google");
  };
  const handleLoginWithTwitter = () => {
    console.log("twitter");
    // Twitter Authentification
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar styles= 'auto' />
      {/* <Image source={require('./splash.png')} styles={{width: 50,}} /> */}
      <TextOpen style={styles.welcome}>Welcome on board!</TextOpen>

      <View style={styles.content}>
        <TextOpen style={styles.signText}>Create an account</TextOpen>

        <CustomBouton
          label={"Continue with Google"}
          provider={"google"}
          onPress={handleLoginWithGoogle}
        />
        <CustomBouton
          label={"Continue with Twitter"}
          provider={"twitter"}
          onPress={handleLoginWithTwitter}
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 30,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "900",
    
    ...Platform.select({
      ios: {
        margin: 24,
      },
      android: {
        marginHorizontal: 0,
      },
      default: {
        // other platforms, web for example
        marginHorizontal: 0,
      },
    }),

    color: colors.primary,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 22,
  },
  signText: {
    fontSize: 20,
    
    ...Platform.select({
      ios: {
        marginHorizontal: 24,
        fontWeight: "bold",
      },
      android: {
        marginHorizontal: 0,
      },
      default: {
        // other platforms, web for example
        marginHorizontal: 0,
      },
    }),

    fontWeight: "900",
    color: "#33313E",
  },
});
