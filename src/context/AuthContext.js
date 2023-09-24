import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import * as webBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {BASE_URL} from '../config';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [sessionId, setSessionId] = React.useState(null);
  const navigation = useNavigation()

  const handleSignWithGoogle = async() => {
    // const responses = await fetch("https://spitfire.onrender.com/api/auth", {
    //     headers: {
    //       "values": ""
    //     },
    //     body: {token: response.params.id_token},
    //     method: "post",
    //   })
    console.log(response?.params?.id_token, "token")
      if (response?.type == "success"){
        const responses = await axios.post("https://spitfire.onrender.com/api/auth", {
          token: response?.params?.id_token,
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      if(responses) {
      setUserInfo(responses)
      setSessionId(responses.headers["set-cookie"])
      AsyncStorage.setItem("userInfo", JSON.stringify({
        user : responses.data,
        session: responses.headers["set-cookie"],
        expires: ""
      })).then(() => navigation.navigate('Loading'))
      
    }
  }
  }


  const handleLogout = async() => {
    const responses =  await axios.post("https://spitfire.onrender.com/api/auth/logout", {
        user: sessionId
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    if(responses) { 
      AsyncStorage.removeItem("userInfo")
      alert('Logged out Successfully');
    }
  }


  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "600277501504-atc23l4388dh8580038nd1j5u46a8spr.apps.googleusercontent.com",
    iosClientId:
      "600277501504-1l277k8qasihdtcvf49s2r7o5p7b7ajp.apps.googleusercontent.com",
      clientId: "600277501504-qejpae95g3rumhintj9vai9al289osjr.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    handleSignWithGoogle();
  }, [response]);

  // const register = (name, email, password) => {
  //   setIsLoading(true);

  //   axios
  //     .post(`${BASE_URL}/register`, {
  //       name,
  //       email,
  //       password,
  //     })
  //     .then(res => {
  //       let userInfo = res.data;
  //       setUserInfo(userInfo);
  //       AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
  //       setIsLoading(false);
  //       console.log(userInfo);
  //     })
  //     .catch(e => {
  //       alert(`register error ${e}`);
  //       setIsLoading(false);
  //     });
  // };

  // const login = (email, password) => {
  //   setIsLoading(true);

  //   axios
  //     .post(`${BASE_URL}/login`, {
  //       email,
  //       password,
  //     })
  //     .then(res => {
  //       let userInfo = res.data;
  //       console.log(userInfo);
  //       setUserInfo(userInfo);
  //       AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
  //       setIsLoading(false);
  //     })
  //     .catch(e => {
  //       alert(`login error ${e}`);
  //       setIsLoading(false);
  //     });
  // };

  // const logout = () => {
  //   setIsLoading(true);

  //   axios
  //     .post(
  //       `${BASE_URL}/logout`,
  //       {},
  //       {
  //         headers: {Authorization: `Bearer ${userInfo.token}`},
  //       },
  //     )
  //     .then(res => {
  //       console.log(res.data);
  //       AsyncStorage.removeItem('userInfo');
  //       setUserInfo({});
  //       setIsLoading(false);
  //     })
  //     .catch(e => {
  //       alert(`logout error ${e}`);
  //       setIsLoading(false);
  //     });
  // };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo && (/* userInfo.expires */true)) {
        setUserInfo(userInfo.user);
        setSessionId(userInfo.sessionId)
      
        navigation.reset({
          index: 0,
          routes: [{name: "Tabs"}]
        })
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      // alert(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  React.useEffect(() => {
    webBrowser.maybeCompleteAuthSession();
    // isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        setUserInfo,
        promptAsync,
        response,
        handleLogout,
        // register,
        // login,
        // logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
