import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Constants from "expo-constants"
import { NavigationContainer } from "@react-navigation/native"
import TopBarNavigator from "../navigators/TopBarNavigation"

const People = () => {
  return (
    <View style = { styles.container}>
      <Text style = {styles.header}>Timeline</Text>
      
      <TopBarNavigator />
    </View>
  )
}

export default People

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    flex: 1,
    backgroundColor: "#fff",
    
  },
  header: {
    fontWeight: "bold",
    color: "rgba(124, 20, 155, 1)",
    fontSize: 30,
    paddingHorizontal: 20
  },
  
})