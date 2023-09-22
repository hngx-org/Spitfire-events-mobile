import { Dimensions, StyleSheet, Text, View, Platform } from 'react-native'
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
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 15,
        marginTop:  Platform.OS === 'ios' ? 35 : 0 ,
        paddingBottom: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: '#c9d6d6',
      }}
    >
      <Ionicons  onPress={()=>
        navigation.goBack()} name="md-chevron-back" size={29} color="black" />



<Text style={{
        color: 'orange',
      }} >12 Members</Text>


      <View></View>
    </View>
  );
}

export default CalendarHeader

const styles = StyleSheet.create({})