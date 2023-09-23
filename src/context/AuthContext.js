import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import * as webBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {BASE_URL} from '../config';


webBrowser.maybeCompleteAuthSession();





export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [instanceOfGauth, setInstanceOfGauth] = React.useState("");

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
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        alert(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = async() => {
    setIsLoading(true);


    if(response) {
      setInstanceOfGauth(response);
      if (response?.type === "success") {
        axios
          .post(`${BASE_URL}/auth`, {
            token: response.authentication.id_token,
          })
          .then(res => {
            let userInfo = res.data;
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
          })
          .catch(e => {
            alert(`login error ${e}`);
            setIsLoading(false);
          });
      }
      setIsLoading(false)
    }
        

    
  };

  const handleSendIDToken = async (callbackly) => {
    promptAsync()
    
  }

  const logout = () => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/auth/logout`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.token}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        alert(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
    } catch (e) {
      alert(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    login();
  }, [response]);

  React.useEffect(() => {
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
        promptAsync,
        instanceOfGauth,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
