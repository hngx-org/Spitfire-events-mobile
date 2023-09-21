import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
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
        <TextOpen
          style={{
            color: "#710193",
            fontSize: 20,
          }}>
          Settings
        </TextOpen>
        <Ionicons name="ellipsis-vertical" size={20} color="black" />
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}>
          <View style={styles.image}></View>
          <Text style={styles.name}></Text>
          <Text style={styles.mail}></Text>
        </View>
      </View>
      <View style={styles.sectionOne}></View>
      <View style={styles.sectionTwo}></View>
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
});
