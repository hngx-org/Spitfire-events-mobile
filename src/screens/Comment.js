import { SafeAreaView, StyleSheet,TouchableWithoutFeedback, ScrollView, Keyboard, Text, View, Image, TouchableOpacity, Dimensions, } from 'react-native'
import React from 'react'
import colors from '../layouts/colors'



const { height, width } = Dimensions.get("window")


const Comment = () => {
  const commentsArr = ["a", "a", "a", "a",]
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback>
        <View style={styles.screenWrapper}>
          {/* Event Details */}
          <Text style={styles.dater}>Today</Text>
          <View style={styles.eventDetailsWrapper}>
            <View>
              <View></View>
              <View></View>
            </View>
            <View>
              <View></View>
              <View></View>
            </View>
          </View>
          {/* Comments */}
          <ScrollView>
            {commentsArr.map((item, index) => {
              return (
                <View key={index}><Text>Hello</Text></View>
              )
            })}
          </ScrollView>
        {/* Input */}
        <View style={styles.inputWrapper}></View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default Comment

const styles = StyleSheet.create({
  screenWrapper: {
    alignItems: "center",
    width: width,
    height: height,
  },
  eventDetailsWrapper: {
    borderRadius: 16,
    width: "85%",
    height: 250,
    backgroundColor: "blue"
  },
  inputWrapper: {
    position: "absolute",
  },
  dater: {
    backgroundColor: "yellow",
    color: "orange",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 16,
    marginBottom: 15,
    marginTop: 5
  },
  sdater: {},
})