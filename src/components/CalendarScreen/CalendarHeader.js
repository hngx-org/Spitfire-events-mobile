import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

const CalendarHeader = () => {
  return (
    <View style={{
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FAFAFC',
      borderBottomWidth: 0.5,
      borderBottomColor: 'gray'
    }}>
      <Text style={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
      }}>Calendar</Text>
      <Ionicons name="ellipsis-vertical" size={20} color="black" />
    </View>
  );
}

export default CalendarHeader

const styles = StyleSheet.create({})