import { Dimensions, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const CalendarHeader = () => {


  //This below is essential for editing the header and all other setOptions where useLayoutEffect helps display certain items before the screen loads
  const navigation = useNavigation();



  return (
    <View
      style={{
        flexDirection: "row",
        height: 48,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 15,
        marginTop: 15,
        paddingHorizontal: 15,
      }}
    >
      <Ionicons  onPress={()=>
        navigation.navigate('People')} name="md-chevron-back" size={20} color="black" />



<Text style={{
        color: 'orange',
      }} >12 Members</Text>
    </View>
  );
}

export default CalendarHeader

const styles = StyleSheet.create({})