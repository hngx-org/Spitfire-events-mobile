import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useContext } from "react";
import CustomBouton from "../components/onboarding/Bouton";
import Constants from "expo-constants";
import colors from "../layouts/colors";
import TextOpen from "../components/TextOpen";


// import openSans from "../layouts/fonts";
// import Input from "../components/onboarding/Input";
// import { StatusBar } from "expo-status-bar";
import logo from "../../assets/icons/logo.png";
import { useNavigation } from '@react-navigation/native';
// import { AuthContext, AuthProvider } from "../context/AuthContext";

//uncomment these three
// import * as webBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import axios from "axios";
import { AuthContext } from "../context/AuthContext";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// webBrowser.maybeCompleteAuthSession();

// IOS : 176112084291-3i88bccbt5jp8urq0vgu50nudoath8k2.apps.googleusercontent.com
// Android : 176112084291-j6rruls1vpmnhnfsjctpe555tgm9o9p7.apps.googleusercontent.com

const Onboarding = (
  // { navigation }
  ) => {
  const navigation = useNavigation();
  // const { userInfo, setUserInfo } = React.useContext(AuthContext)
  // const [userInfo, setUserInfo] = React.useState(null);
  // const [sessionId, setSessionId] = React.useState(null);
//   const handleLoginWithGoogle = () => {};

const { promptAsync } = useContext(AuthContext)


// take this to the auth context
// const handleSignWithGoogle = async() => {
//   // const responses = await fetch("https://spitfire.onrender.com/api/auth", {
//   //     headers: {
//   //       "values": ""
//   //     },
//   //     body: {token: response.params.id_token},
//   //     method: "post",
//   //   })
//   console.log(response.params.id_token, "token")
//     const responses = await axios.post("https://spitfire.onrender.com/api/auth", {
//         token: response.params.id_token,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json"
//         }
//       }
//     )
//   setUserInfo(responses)
//   setSessionId(responses.headers["set-cookie"])
// }

// this is the structure of the userInfo
// const  { avatar, email, id, name } = userInfo;


// take this to the auth context
// const handleLogout = async() => {
//   const responses =  await axios.post("https://spitfire.onrender.com/api/auth/logout", {
//       user: sessionId
//     },
//     {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }
//   )
//   console.log(responses)
// }

//   // handling google auth
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId:
  //     "600277501504-atc23l4388dh8580038nd1j5u46a8spr.apps.googleusercontent.com",
  //   iosClientId:
  //     "600277501504-1l277k8qasihdtcvf49s2r7o5p7b7ajp.apps.googleusercontent.com",
  //     clientId: "600277501504-qejpae95g3rumhintj9vai9al289osjr.apps.googleusercontent.com"
  // });

  // React.useEffect(() => {
  //   handleSignWithGoogle();
  // }, [response]);

  // React.useEffect(() => {
  //   webBrowser.maybeCompleteAuthSession();
  // }, []);

  // Test if user is already connected
  // async function handleSignWithGoogl() {
  //   const user = await AsyncStorage.getItem("@user");
  //   if (!user) {
  //     if (response?.type === "success") {
  //       await getUserInfo(response.params.id_token);
  //     }
  //   } else {
  //     setUserInfo(JSON.parse(user));
  //   }
  // }

  // get user info from google
  // const getUserInfo = async (token) => {
  //   const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   const user = await response.json();
  //   await AsyncStorage.setItem("@user", JSON.stringify(user));
  //   setUserInfo(user);
  // };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.img} />
      <View style={styles.content}>
        <View style={styles.text}>
          <ScrollView>
            <TextOpen font={"OpenSans_600SemiBold"} style={styles.welcome}>
              Welcome on board
            </TextOpen>
          </ScrollView>
          <TouchableOpacity 
          // onPress={() => navigation.navigate("Register")}
            // onPress={() => {navigation.navigate("Loading")}}
            >
            <TextOpen style={styles.signText}>Create an account</TextOpen>
          </TouchableOpacity>
        </View>
        <View style={styles.action}>
          {/* <CustomBouton
            label={"Continue with Google"}
            provider={"google"}
            // onPress={() => promptAsync()}
            onPress={() => {navigation.navigate("Loading")}}
          /> */}
          <View style={styles.bottom}>
            <TextOpen style={styles.login}>Have an account ? </TextOpen>
            <TouchableOpacity 
            // onPress={() => promptAsync()}
            onPress={() => {
              // promptAsync()
              {navigation.navigate("Loading")}
            }}
            >
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
  previewAuthData: {
    width: 300,
    // 
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
