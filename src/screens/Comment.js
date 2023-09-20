import { StyleSheet,TouchableWithoutFeedback, ScrollView, Keyboard, Text, View } from 'react-native'
import React from 'react'
import colors from '../layouts/colors'


const Comment = () => {
  const commentsArr = ["a", "a", "a", "a",]
  return (
    <TouchableWithoutFeedback>
      <View>
        {/* Event Details */}
        <View>
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
  )
}

export default Comment

const styles = StyleSheet.create({
  eventDetailsWrapper: {
    borderRadius: 16,
    width: "94%",
    height: 400,
  },
  inputWrapper: {
    position: "absolute",
  }
})