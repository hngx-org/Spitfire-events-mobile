import { View, Text, StyleSheet, Image, ScrollView } from "react-native"

import EventItem from "../components/EventItem"

const FriendEvents = () => {
  return(
    <View style = {{paddingHorizontal: 20, paddingTop: 10, backgroundColor: "#fff", flex: 1}}>
    
    <ScrollView>
      <EventItem />
      
    </ScrollView>
    
      <View style = {styles.fab}>
        <Image
          source = {require("../../assets/icons/plus-icon.png")}
          style = {{width: 30, height: 30}}
        />
      </View>
    </View>
  )
}

export default FriendEvents

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(234, 186, 0, 1)",
    padding: 10,
    borderRadius: 50,
  }
})