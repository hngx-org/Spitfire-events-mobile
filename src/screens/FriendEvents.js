import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native"
import EventItem from "../components/EventItem"
import { useNavigation } from "@react-navigation/native"

const FriendEvents = () => {
  const navigation = useNavigation()
  
  return(
    <View style = {{paddingHorizontal: 20, paddingTop: 10, backgroundColor: "#fff", flex: 1}}>
    
    <ScrollView>
      <EventItem />
      
    </ScrollView>
    
      <Pressable 
        style = {styles.fab}
        onPress = {() => navigation.navigate("Create")}
      >
        <Image
          source = {require("../../assets/icons/plus-icon.png")}
          style = {{width: 20, height: 20}}
        />
      </Pressable>
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
    padding: 15,
    borderRadius: 50,
  }
})