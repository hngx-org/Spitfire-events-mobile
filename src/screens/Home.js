import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Constants from "expo-constants"
import TopBarNavigator from "../navigators/TopBarNavigation"
import TextOpen from "../components/TextOpen"

const Home = () => {
  return (
    <View style = { styles.container}>
      <TextOpen 
        style = {styles.header}
        font = {"OpenSans_700Bold"}
      >Timeline</TextOpen>
      
      <TopBarNavigator />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    flex: 1,
    backgroundColor: "#fff",
    
  },
  header: {
    color: "rgba(124, 20, 155, 1)",
    fontSize: 30,
    paddingHorizontal: 20
  },
  
})