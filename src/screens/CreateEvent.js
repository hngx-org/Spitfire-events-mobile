import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import Constants from "expo-constants"
import DatePicker from "react-native-date-picker"
import colors from "../layouts/colors"
import CreateEventInputBox from "../components/CreateEventInputBox"
import AppTextInput from "../components/AppTextInput"
import TextOpen from "../components/TextOpen"
import AppButton from "../components/AppButton"
import DropdownPicker from "react-native-dropdown-picker"

const CreateEvent = () => {
  const [date, setDate] = useState(new Date())
  const [dateOpen, setDateOpen] = useState(false)
  const [timeOpen, setTimeOpen] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState("")
  const [openDropdown, setOpenDropdown] = useState(false)
  const groups = [
    {
      value: 1,
      label: "YBNL group",
    },
    {
      value: 2,
      label: "Mafia group",
    },
  ]
  
  return (
    <View style = { styles.container}>
      <DatePicker
        modal
        open = {dateOpen}
        date = {date}
        mode = {"date"}
        onConfirm = {(date) => {
          console.log(date);
          setDateOpen(false)
        }}
        onCancel = {() => {
          setDateOpen(false)
        }}
      />
      <DatePicker
        modal
        open = {timeOpen}
        date = {date}
        mode = {"time"}
        onConfirm = {(date) => {
          console.log(date);
          setTimeOpen(false)
        }}
        onCancel = {() => {
          setTimeOpen(false)
        }}
      />
    
    
      <ScrollView>
        <View style= {{marginBottom: 20}}>
          <Text style = {styles.header}>Create Event</Text>
        </View>
        
        <View style = {{marginBottom: 20}}>
          <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >Event Description</TextOpen>
          <CreateEventInputBox
            onChangeText = {() => {}}
            button = {false}
            numberOfLines = {1}
          />
        </View>
        <View style = {{marginBottom: 20}}>
          <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >Location</TextOpen>
          
          <CreateEventInputBox
            button = {true}
            iconSrc = {require("../../assets/icons/location-icon.png")}
            btnText = {"Add Location"}
            editable = {false}
            numberOfLines = {1}
          />
        </View>
        
        <View style = {{marginBottom: 20}}>
          <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >Start</TextOpen>
          <View style = {{flexDirection: "row", gap: 20}}>
            <CreateEventInputBox
              button = {true}
              iconSrc = {require("../../assets/icons/calendar-icon.png")}
              numberOfLines = {1}
              editable = {false}
              placeholder = {"DD/MM/YYYY"}
              onPress = {() => setDateOpen(true)}
            />
            <CreateEventInputBox
              button = {true}
              iconSrc = {require("../../assets/icons/time-icon.png")}
              numberOfLines = {1}
              editable = {false}
              placeholder = {"00:00"}
              onPress = {() => setTimeOpen(true)}
            />
            
          </View>
        </View>
        <View style = {{marginBottom: 20}}>
          <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >End</TextOpen>
          <View style = {{flexDirection: "row", gap: 20}}>
            <CreateEventInputBox
              button = {true}
              iconSrc = {require("../../assets/icons/calendar-icon.png")}
              numberOfLines = {1}
              editable = {false}
              placeholder = {"DD/MM/YYYY"}
              onPress = {() => setDateOpen(true)}
            />
            <CreateEventInputBox
              button = {true}
              iconSrc = {require("../../assets/icons/time-icon.png")}
              numberOfLines = {1}
              editable = {false}
              placeholder = {"00:00"}
              onPress = {() => setTimeOpen(true)}
            />
            
          </View>
        </View>
        <View style ={{marginBottom: 30}}>
          <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >Select groups</TextOpen>
          
          <DropdownPicker
            value={selectedGroup}
            items={groups}
            open={openDropdown}
            containerStyle={{
              borderColor: colors.inputBorder,
              backgroundColor: colors.white,
              borderRadius: 10,
              zIndex: 1,
            }}
            style = {{
              backgroundColor: "#f0f0f0",
              borderWidth: 0.5,
            }}
            placeholderStyle={{ fontSize: 16 }}
            placeholder={selectedGroup ? selectedGroup : ""}
            onPress={() => setOpenDropdown(!openDropdown)}
            keyExtractor={(item, index) => item}
            dropDownContainerStyle={{
              borderColor: colors.inputBorder,
              borderWidth: 0.2,
              borderColor: colors.borderColor,
            }}
            textStyle={{ fontSize: 16, }}
            onSelectItem={(val) => {
              setSelectedGroup(val.label);
              setOpenDropdown(false);
            }}
            labelStyle={{ fontSize: 16, }}
            listItemLabelStyle={{ fontSize: 16, }}
          />
        </View>
        
        <AppButton
          onPress = {() => {}}
          title = {"Create Event"}
        />
        
      </ScrollView>
    </View>
  )
}

export default CreateEvent

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    fontWeight: "bold",
    color: "rgba(124, 20, 155, 1)",
    fontSize: 30,
  },
  label: {
    fontSize: 14,
    color: colors.lightGrey,
    marginBottom: 5,
    
  },
  textBtn: {
    flexDirection: "row",
    gap: 10,
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 0.5,
    
  },
  
})