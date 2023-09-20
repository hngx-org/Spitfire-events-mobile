import { SafeAreaView, StyleSheet,TouchableWithoutFeedback, ScrollView, Keyboard, Text, View, Image, TouchableOpacity, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import colors from '../layouts/colors'



const { height, width } = Dimensions.get("window")


const Comment = () => {
  const commentsArr = [
    "a",
    "a",
    "a",
    "a",
  ]

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback>
        <View style={styles.screenWrapper}>
          {/* Event Details */}
          <Text style={styles.dater}>Today</Text>
          <View style={styles.eventDetailsWrapper}>
            <View style={styles.eventDetailsTop}>
              <View style={styles.eventDetailsHeading}>
                <View>
                  <Image
                      source = {require("../../assets/icons/plus-icon.png")}
                      style = {{width: 30, height: 30}}
                    />
                  <Text style={styles.eventDetailsHeadingText}>Footbal game</Text>
                </View>
                <Text style={styles.dater}>May 20</Text>
              </View>
              <View style={styles.timeAndLocation}>
                <View>
                  <Image
                      source = {require("../../assets/icons/plus-icon.png")}
                      style = {{width: 30, height: 30}}
                    />
                  <Text>Footbal game</Text>
                </View>
                <View>
                  <Image
                      source = {require("../../assets/icons/plus-icon.png")}
                      style = {{width: 30, height: 30}}
                    />
                  <Text>Footbal game</Text>
                </View>
              </View>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.eventDetailsBottom}>
              <View style={styles.checkBox}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.checkBoxText}>Check box to invite Techies</Text>
              </View>
              <View style={styles.shareWrapper}>
                <TouchableOpacity style={styles.shareButton}>
                  <Text style={styles.shareButtonText}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Comments */}
          <ScrollView style={styles.commentsWrapper}>
            <View style={styles.commentsWrapper}>
              {commentsArr.map((item, index) => {
                return (
                  <View key={index} style={styles.singleCommentWrapper}>
                    <Image
                      source = {require("../../assets/icons/plus-icon.png")}
                      style = {{width: 30, height: 30}}
                    />
                    <View style={styles.commentBox}>
                      <Text style={styles.userName}>Johnexx</Text>
                      <Text>I will be there no matter what</Text>
                      <View style={styles.imageWrapper}>
                        {commentsArr.map((item, index) => {
                          const width = `${100 / commentsArr.length}%`
                          return (
                            <View key={index}>
                              <Image
                                source = {require("../../assets/icons/plus-icon.png")}
                                style = {{width: width, height: "100%"}}
                              />
                            </View>
                          )
                        })}
                      </View>
                    </View>
                  </View>
                )
              })}
            </View>
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
    backgroundColor: "blue",
    padding: 15,
    justifyContent: "space-between"
  },
  commentsWrapper: {
    borderRadius: 16,
    width: "85%",
    maxWidth: "85%",
    minHeight: 250,
    backgroundColor: "green",
    gap: 20,
  },
  commentBlock: {
    borderRadius: 16,
    width: "85%",
    maxWidth: "85%",
    minHeight: 250,
    backgroundColor: "green",
    gap: 20,
  },
  inputWrapper: {
    position: "absolute",
  },
  dater: {
    backgroundColor: "yellow",
    color: "orange",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 16,
    marginBottom: 15,
    marginTop: 5
  },
  eventDetailsHeading: {
    flexDirection: "row",
    // backgroundColor: "white",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center"
  },
  eventDetailsHeadingText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    width: width * 0.85,
    borderWidth: 0.5,
    borderEndColor: "gray",
    position: "absolute",
    top: "65%",
  },
  timeAndLocation: {
    gap: 5,
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center"
  },
  checkBoxText: {
    fontWeight: "bold"
  },
  shareWrapper: {
    width: "100%",
    minWidth: "100%",
    // backgroundColor: "white",
    height: 50,
    marginTop: 5,
  },
  shareButton: {
    width: "100%",
    minWidth: "100%",
    height: 50,
    minHeight: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  shareButtonText: {
    
  },
  eventDetailsTop: {},
  eventDetailsBottom: {},
  sdater: {},
})