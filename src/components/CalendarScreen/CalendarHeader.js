import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import TextOpen from '../TextOpen';

const CalendarHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 48,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 15,
        marginTop: 15,
      }}
    >
      <TextOpen
        style={{
          color: "#710193",
          fontSize: 20,
        }}
        font={"OpenSans_600SemiBold"}
      >
        Calendar
      </TextOpen>
      <Ionicons name="ellipsis-vertical" size={20} color="black" />
    </View>
  );
}

export default CalendarHeader

const styles = StyleSheet.create({})