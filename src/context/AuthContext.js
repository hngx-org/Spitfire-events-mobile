import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, {createContext, useEffect, useState} from "react";
import * as webBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {BASE_URL} from "../config";

webBrowser.maybeCompleteAuthSession();

const handleSendIDToken = async () => {
  const user = await AsyncStorage.getItem("@user");
  if (!user) {
    if (response?.type === "success") {
      await getUserInfo(response.authentication.id_token);
    }
  } else {
    setUserInfo(JSON.parse(user));
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // handling google auth
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "176112084291-j6rruls1vpmnhnfsjctpe555tgm9o9p7.apps.googleusercontent.com",
    iosClientId:
      "176112084291-3i88bccbt5jp8urq0vgu50nudoath8k2.apps.googleusercontent.com",
  });

  const register = (name, email, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        alert(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = async () => {
    setIsLoading(true);

    promptAsync();
    if (response) {
      if (response?.type === "success") {
        const token = response.authentication.id_token;
        axios
          .post(`${BASE_URL}/auth`, {
            token,
          })
          .then((res) => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
            setIsLoading(false);
          })
          .catch((e) => {
            alert(`login error ${e}`);
            setIsLoading(false);
          });
      }
    }
  };

  const logout = () => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/logout`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.token}`},
        }
      )
      .then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        setIsLoading(false);
      })
      .catch((e) => {
        alert(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

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
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
