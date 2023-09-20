import {StyleSheet, Text, View} from "react-native";
import React from "react";

const EventDetails = ({item}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 8,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "#9D7AE8",
        borderWidth: 0.5,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
            color: "#33313E",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 16,
            color: "#84838B",
          }}
        >
          {item.address}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 12,
            color: "#33313E",
            marginBottom: 3
          }}
        >
          {item.startTime}
        </Text>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 12,
            color: "#84838B",
          }}
        >
          {item.endTime}
        </Text>
      </View>
    </View>
  );
};

export default EventDetails;

const styles = StyleSheet.create({});
