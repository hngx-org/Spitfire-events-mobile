import { Dimensions, StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import TextOpen from '../TextOpen';
import { useNavigation } from '@react-navigation/native';

const CalendarHeader = ({title,member}) => {


  //This below is essential for editing the header and all other setOptions where useLayoutEffect helps display certain items before the screen loads
  const navigation = useNavigation();



  return (
    <View
      style={{
        flexDirection: "row",
        height: 48,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: '#c9d6d6',
        paddingBottom: 10,
        paddingHorizontal: Platform.OS === 'ios' ? 25 : 0,
      }}
    >
      <Ionicons  onPress={()=>
        navigation.goBack()} name="md-chevron-back" size={29} color="black" />

<View style={{ }} >
              <TextOpen
        style={{
          color: "#710193",
          fontSize: 20,
        }}
        font={"OpenSans_600SemiBold"}
      >
        {title}
      </TextOpen>
      <Text>{member}</Text>
      </View>

      <Image style={{
        height: 48,
        width: 48,
        borderRadius: 50,
      }} source={require('./profile.jpg')} />
    </View>
  );
}

export default CalendarHeader

const styles = StyleSheet.create({})