import { View, Text, StyleSheet, Image, FlatList, Pressable } from "react-native"
import { useContext, useEffect } from "react"
import EventItem from "../components/EventItem"
import { useNavigation } from "@react-navigation/native"
import { EventContext } from "../context/EventContext"
import { useDataContext } from "../hooks/useDataContext"
import EventsItem from "../components/EventsItem"

const FriendEvents = () => {
  const navigation = useNavigation()
  // const { events } = useContext(EventContext)
  const {data, dispatch} = useDataContext()

  useEffect(()=>{

    const fetchData = async () => {
        const response = await fetch(`https://spitfire.onrender.com/api/events`, {
      
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'SET_DATA', payload: json})
    
        }    
    }
    
    fetchData()
    
    
}, [])

  return (
    <View style = {{paddingHorizontal: 20, paddingTop: 10, backgroundColor: "#fff", flex: 1}}>
      <FlatList 
        data = {data.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem = {({ item }) => {
          return (
            <EventsItem 
              title = {item.title}
              date = {item.date}
              start_time = {item.start_time}
              end_time = {item.end_time}
              location = {item.location}
            />
          )
        }}
      />
      <Pressable 
        style = {styles.fab}
        onPress = {() => navigation.navigate("Create")}
      >
        <Image
          source = {require("../../assets/icons/plus-icon.png")}
          style = {{width: 25, height: 25}}
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
    backgroundColor: "#f49400",
    padding: 15,
    borderRadius: 50,
  }
})