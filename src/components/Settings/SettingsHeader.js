import {Dimensions, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import TextOpen from "../TextOpen";

const SettingsHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 48,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextOpen
        style={{
          color: "#710193",
          fontSize: 20,
        }}
        font={"OpenSans_600SemiBold"}
      >
        Settings
      </TextOpen>
      <Ionicons name="ellipsis-vertical" size={20} color="black" />
    </View>
  );
};

export default SettingsHeader;

const styles = StyleSheet.create({});
