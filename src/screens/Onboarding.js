import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomBouton from "../components/onboarding/Bouton";
import Constants from "expo-constants";
import colors from "../layouts/colors";
import TextOpen from "../components/TextOpen";

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
    fontWeight: "bold",
    color: colors.primary,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 22,
  },
  signText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#33313E",
  },
});
