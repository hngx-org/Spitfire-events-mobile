import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import TextOpen from "../TextOpen";

const EventDetails = ({item}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#F0E8F2",
        alignItems: "center",
        paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 20
      }}
    >
      <View
        style={{
          marginRight: 20,
        }}
      >
        <Image
          style={{width: 58, height: 52, borderRadius: 8}}
          source={{
            uri: item.thumbnail,
          }}
        />
      </View>
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <TextOpen
          style={{
            fontSize: 15,
            color: "#710193",
          }}
          font={"OpenSans_600SemiBold"}
        >
          {item.title}
        </TextOpen>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              marginRight: 10,
              marginBottom: 5,
            }}
            source={require("../../../assets/icons/event-location.png")}
          />
          <TextOpen
            style={{
              fontSize: 14,
              color: "#87748C",
            }}
          >
            {item.location}
          </TextOpen>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              marginRight: 10,
            }}
            source={require("../../../assets/icons/event-time.png")}
          />
          <TextOpen
            style={{
              fontSize: 14,
              color: "#87748C",
            }}
          >
            {item.start_time} - {item.end_time}
          </TextOpen>
        </View>
      </View>
    </View>
  );
};

export default EventDetails;

const styles = StyleSheet.create({});
