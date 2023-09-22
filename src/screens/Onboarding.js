import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomBouton from "../components/onboarding/Bouton";
import Constants from "expo-constants";
import colors from "../layouts/colors";
import TextOpen from "../components/TextOpen";


import openSans from "../layouts/fonts";
import Input from "../components/onboarding/Input";
import { StatusBar } from "expo-status-bar";
import logo from "../../assets/icons/logo.png";
import * as webBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

webBrowser.maybeCompleteAuthSession();

// IOS : 176112084291-3i88bccbt5jp8urq0vgu50nudoath8k2.apps.googleusercontent.com
// Android : 176112084291-j6rruls1vpmnhnfsjctpe555tgm9o9p7.apps.googleusercontent.com

const Onboarding = ({ navigation }) => {
  const [userInfo, setUserInfo] = React.useState(null);
  const handleLoginWithGoogle = () => {};

  // handling google auth
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "176112084291-j6rruls1vpmnhnfsjctpe555tgm9o9p7.apps.googleusercontent.com",
    iosClientId:
      "176112084291-3i88bccbt5jp8urq0vgu50nudoath8k2.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    handleSignWithGoogl();
  }, [response]);

  // Test if user is already connected
  async function handleSignWithGoogl() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  // get user info from google
  const getUserInfo = async (token) => {
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const user = await response.json();
    await AsyncStorage.setItem("@user", JSON.stringify(user));
    setUserInfo(user);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.img} />
      <View style={styles.content}>
        <View style={styles.text}>
          <TextOpen font={"OpenSans_600SemiBold"} style={styles.welcome}>
            Welcome on board
          </TextOpen>
          <TouchableOpacity onPress={() => navigation.replace("Loading")}>
            <TextOpen style={styles.signText}>Create an account</TextOpen>
          </TouchableOpacity>
        </View>
        <View style={styles.action}>
          <CustomBouton
            label={"Continue with Google"}
            provider={"google"}
            onPress={() => navigation.replace("Loading")}
          />
          <View style={styles.bottom}>
            <TextOpen style={styles.login}>Have an account ? </TextOpen>
            <TouchableOpacity onPress={() => navigation.replace("Loading")}>
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

    
    ...Platform.select({
      ios: {
        marginHorizontal: 24,
      },
      android: {
        marginHorizontal: 0,
      },
      default: {
        // other platforms, web for example
        marginHorizontal: 0,
      },
    }),

    color: "#33313E",

  },
});
