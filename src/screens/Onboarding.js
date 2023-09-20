import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomBouton from "../components/onboarding/Bouton";
import Constants from "expo-constants";
import colors from "../layouts/colors";
import TextOpen from "../components/TextOpen";
import openSans from "../layouts/fonts";
import Input from "../components/onboarding/Input";
import logo from "../../assets/icons/logo.png";

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
      <Image source={logo} style={styles.img} />
      <View style={styles.content}>
        <View style={styles.text}>
          <TextOpen style={styles.welcome}>Welcome on board! </TextOpen>
          <TextOpen style={styles.signText}>Create an account</TextOpen>
        </View>
        <View style={styles.action}>
          <CustomBouton
            label={"Continue with Google"}
            provider={"google"}
            onPress={handleLoginWithGoogle}
          />
          <View style={styles.bottom}>
            <TextOpen style={styles.login}>Have an account ? </TextOpen>
            <TouchableOpacity>
              <TextOpen style={styles.log}>Login</TextOpen>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Constants.statusBarHeight + 30,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
  content: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "space-between",
    gap: 16,
    marginVertical: 30,
    paddingVertical: 20,
  },
  signText: {
    fontSize: 20,
    color: colors.secondary,
  },
  img: {
    marginVertical: 20,
  },
  text: {
    gap: 20,
  },
  action: {
    gap: 30,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 1,
  },
  log: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  login: {
    textAlign: "center",
    flexDirection: "row",
  },
});
