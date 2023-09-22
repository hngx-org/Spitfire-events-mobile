import {View, Text, Image, StyleSheet} from "react-native";
import colors from "../layouts/colors";
import openSans from "../layouts/fonts";
import TextOpen from "./TextOpen";

const EventItem = ({ title, start_time, end_time, location, date}) => {
  const daysRemaining = Math.ceil((new Date(date).getTime() - new Date().getTime()) / 1000 / 3600 / 24)
  
  return (
    <View style={styles.box}>
      <View style={{marginRight: 10}}>
        <Image
          source={require("../../assets/images/cartoon.png")}
          style={{width: 50, height: 50}}
        />
      </View>

      <View style = {{gap: 5, flex: 1}}>
        <TextOpen 
          style = {styles.title}
          font = {"OpenSans_700Bold"}
        >{title}</TextOpen>
        <TextOpen 
          style = {styles.date}
          font = {"OpenSans_600SemiBold"}
        >{new Date(date).toDateString()}</TextOpen>
        <TextOpen 
          style = {styles.time}
          font = {"OpenSans_600SemiBold"}
        >{`${start_time} - ${end_time}`}</TextOpen>
        <TextOpen 
          style = {styles.location}
          font = {"OpenSans_700Bold"}
        >{location}</TextOpen>
      </View>

      <View
        style={{
          alignItems: "flex-end",
          gap: 70,
          
        }}
      >
        <Image
          source = {require("../../assets/icons/menu-icon.png")}
          style = {{width: 20, height: 20}}
        />
        <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
          {daysRemaining == 0 && <View
            style={{
              padding: 3,
              backgroundColor: "rgba(0, 200, 0, 1)",
              borderRadius: 3,
            }}
          ></View>}
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "rgba(124, 20, 155, 1)",
            }}
          >
            {daysRemaining > 0 ? `Less than ${daysRemaining} days` : (daysRemaining == 0 ? `Live` : "Event Ended")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(240, 232, 242, 1)",
    borderWidth: 0.5,
    borderColor: "rgba(244, 198, 255, 1)",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: "rgba(124, 20, 155, 1)",
  },
  date: {
    color: "#87748C",
    fontSize: 16,
  },
  time: {
    color: "#87748C",
    fontSize: 14,
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f49400",
  },
});
