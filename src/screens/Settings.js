import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import React from "react";

const Settings = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          height: 48,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Text
          style={{
            color: "#710193",
            fontSize: 20,
          }}>
          Settings
        </Text>
        <Ionicons name="ellipsis-vertical" size={20} color="black" />
      </View>
      <ScrollView>
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}>
          <View style={styles.image}>
            <Image style={styles.image} source={require("../../assets/profile.jpg")} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.name}>Salome</Text>
          </View>
          <Text style={styles.mail}>salome357@gmail.com</Text>
        </View>
      </View>
      <View style={styles.sectionOne}>
        <View style={styles.textContainr}>
          <View style={styles.leftSide}>
            <Ionicons name="notifications-outline" size={24} color="#87748C" />
            <Text style={styles.text}>Notification</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={24} color="#87748C" />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainr}>
          <View style={styles.leftSide}>
            <MaterialIcons name="lock-outline" size={24} color="#87748C" />

            <Text style={styles.text}>Privacy</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={24} color="#87748C" />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainr}>
          <View style={styles.leftSide}>
            <Ionicons name="notifications-outline" size={24} color="#87748C" />
            <Text style={styles.text}>Apperance</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={24} color="#87748C" />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainr}>
          <View style={styles.leftSide}>
            <Fontisto name="world-o" size={24} color="#87748C" />
            <Text style={styles.text}>Language and Region</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={24} color="#87748C" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionTwo}>
        <View style={styles.textContainr}>
          <View style={styles.leftSide}>
            <AntDesign name="questioncircleo" size={24} color="#87748C" />
            <Text style={styles.text}>Help an Support</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={24} color="#87748C" />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainr}>
          <View style={styles.leftSide}>
            <AntDesign name="exclamationcircleo" size={24} color="#87748C" />
            <Text style={styles.text}>About</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={24} color="#87748C" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logoutSpace}>
        <SimpleLineIcons name="logout" size={24} color="#EA3131" />
        <Text style={styles.logoutText}>Logout</Text>
      </View>
    </ScrollView>
      </View>
    );
  };
  
  export default Settings;

  const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight + 10,
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    profileContainer: {
      alignItems: "center",
    },
    profileImage: {
      alignItems: "center",
      justifyContent: 'center',
    },
    image: {
      height: 70,
      width: 70,
      borderRadius: 50,
    },
    name: {
      fontSize: 20,
      color: "#710193",
    },
    mail: {
      marginTop: 8,
    },
    sectionOne: {
      alignItems: "center",
      marginTop: 40,
      borderRadius: 10,
      backgroundColor: "#F0E8F2",
      paddingVertical: 10,
    },
    textContainr: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "95%",
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    leftSide: {
      flexDirection: "row",
    },
    text: {
      fontSize: 18,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 18,
      color: "#87748C",
    },
    sectionTwo: {
      alignItems: "center",
      marginTop: 40,
      borderRadius: 10,
      backgroundColor: "#F0E8F2",
      paddingVertical: 10,
    },
    logoutSpace: {
      flexDirection: "row",
      paddingLeft: 5,
      marginTop: 30,
    },
    logoutText: {
      color: "#EA3131",
      fontSize: 18,
      marginLeft: 18,
    },
  });