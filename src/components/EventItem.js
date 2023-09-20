import { View, Text, Image, StyleSheet } from "react-native"

const EventItem = () => {
  return (
    <View style = {styles.box}>
      <View style = {{marginRight: 10}}>
        <Image
          source = {require("../../assets/images/cartoon.png")}
          style = {{width: 50, height: 50}}
        />
      </View>
      <View style = {{gap: 2, flex: 1}}>
        <Text style = {styles.title}>Football Game</Text>
        <Text style = {styles.date}>May 20, 2023</Text>
        <Text style = {styles.time}>Friday 4-6pm</Text>
        <Text style = {styles.location}>Teslim Balogun Stadium</Text>
      </View>
      
      <View style = {{justifyContent: "space-between", gap: 70, alignItems: "flex-end"}}>
        <Image
          source = {require("../../assets/icons/menu-icon.png")}
          style = {{width: 20, height: 20}}
        />
        <View style = {{flexDirection: "row", gap: 5, alignItems: "center"}}>
          <View style = {{padding: 3, backgroundColor: "rgba(0, 200, 0, 1)", borderRadius: 3}}></View>
          <Text style = {{fontSize: 16, fontWeight: "bold", color: "rgba(124, 20, 155, 1)"}}>LIVE</Text>
        </View>
      </View>
    </View>
  )
}

export default EventItem

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(240, 232, 242, 1)",
    borderWidth: 0.5,
    borderColor: "rgba(244, 198, 255, 1)",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(124, 20, 155, 1)",
  },
  date: {
    color: "#000",
    fontSize: 16,
    
  },
  time: {
    color: "#000",
    fontSize: 12,
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(234, 186, 0, 1)"
  }
})