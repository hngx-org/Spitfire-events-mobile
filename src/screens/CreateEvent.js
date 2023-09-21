import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, Image } from 'react-native'
import React, { useState, useReducer } from 'react'
import Constants from "expo-constants"
import DateTimePicker from "@react-native-community/datetimepicker"
import colors from "../layouts/colors"
import CreateEventInputBox from "../components/CreateEventInputBox"
import AppTextInput from "../components/AppTextInput"
import TextOpen from "../components/TextOpen"
import AppButton from "../components/AppButton"
import DropdownPicker from "react-native-dropdown-picker"

const pickerReducer = (state, action) => {
  switch (action.type) {
    case 'START_DATE_OPEN':
      return {...state, startDateOpen: true}
      break;
    case 'START_DATE_CLOSE':
      return {...state, startDateOpen: false}
      break;
    case 'START_TIME_OPEN':
      return {...state, startTimeOpen: true}
      break;
    case 'START_TIME_CLOSE':
      return {...state, startTimeOpen: false}
      break;
    case 'END_DATE_OPEN':
      return {...state, endDateOpen: true}
      break;
    case 'END_DATE_CLOSE':
      return {...state, endDateOpen: false}
      break;
    case 'END_TIME_OPEN':
      return {...state, endTimeOpen: true}
      break;
    case 'END_TIME_CLOSE':
      return {...state, endTimeOpen: false}
      break;
    
    default:
      return state
  }
}

const CreateEvent = () => {
  const [date, setDate] = useState(new Date())
  const [state, dispatch] = useReducer(pickerReducer, {})
  const [selectedGroup, setSelectedGroup] = useState("")
  const [openDropdown, setOpenDropdown] = useState(false)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const groups = [
    {
      value: 1,
      label: "Mafia group",
    },
    {
      value: 2,
      label: "Techies",
    },
    
  ]
  
  const [newEvent, setNewEvent] = useState({})
  const [formatted, setFormatted] = useState({})
  
  return (
    <View style = { styles.container}>
    
      {state.startDateOpen && <DateTimePicker
        display = {"default"}
        value = {date}
        mode = {"date"}
        onChange = {(e, selectedDate) => {
          setDate(selectedDate)
          setFormatted({...formatted, startDate: `${selectedDate.getUTCDate()}/${(selectedDate.getUTCMonth() + 1) < 10 ? "0" + (selectedDate.getUTCMonth() + 1) : selectedDate.getUTCMonth()+ 1}/${selectedDate.getUTCFullYear()}`});
          setNewEvent({...newEvent, startDate: selectedDate})
          dispatch({type: "START_DATE_CLOSE"})
        }}
        minimumDate = {new Date()}
        
      />}
      {state.endDateOpen && <DateTimePicker
        display = {"default"}
        value = {date}
        mode = {"date"}
        onChange = {(e, selectedDate) => {
          setDate(selectedDate)
          setFormatted({...formatted, endDate: `${selectedDate.getUTCDate()}/${(selectedDate.getUTCMonth() + 1) < 10 ? "0" + (selectedDate.getUTCMonth() + 1) : selectedDate.getUTCMonth()+ 1}/${selectedDate.getUTCFullYear()}`});
          setNewEvent({...newEvent, endDate: selectedDate})
          dispatch({type: "END_DATE_CLOSE"})
          
        }}
        minimumDate = {newEvent.startDate}
        
      />}
      
      {state.startTimeOpen && <DateTimePicker
        display = "default"
        value = {date}
        mode = {"time"}
        onChange = {(e, selectedDate) => {
          setDate(selectedDate)
          setFormatted({...formatted, startTime: `${(selectedDate.getUTCHours() + 1) < 10 ? "0" + (selectedDate.getUTCHours() + 1) : selectedDate.getUTCHours()+ 1}:${(selectedDate.getUTCMinutes() + 1) < 10 ? "0" + (selectedDate.getUTCMinutes()) : selectedDate.getUTCMinutes()}`});
          setNewEvent({...newEvent, startDate: selectedDate})
          dispatch({type: "START_TIME_CLOSE"})
        }}
        minimumDate = {new Date()}
      />}
      
      {state.endTimeOpen && <DateTimePicker
        display = "default"
        value = {date}
        mode = {"time"}
        onChange = {(e, selectedDate) => {
          setDate(selectedDate)
          setFormatted({...formatted, endTime: `${(selectedDate.getUTCHours() + 1) < 10 ? "0" + (selectedDate.getUTCHours() + 1) : selectedDate.getUTCHours()+ 1}:${(selectedDate.getUTCMinutes() + 1) < 10 ? "0" + (selectedDate.getUTCMinutes()) : selectedDate.getUTCMinutes()}`});
          setNewEvent({...newEvent, endDate: selectedDate})
          dispatch({type: "END_TIME_CLOSE"})
        }}
        minimumDate = {newEvent.startDate}
      />}
    
    
      <ScrollView>
        <View style= {{marginBottom: 20}}>
          <TextOpen 
            style = {styles.header}
            font = {"OpenSans_700Bold"}
          >Create Event</TextOpen>
        </View>
        
        <View style = {{marginBottom: 20}}>
          <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >Event Description</TextOpen>
          <CreateEventInputBox
            onChangeText = {(val) => setNewEvent({...newEvent, title: val})}
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
            numberOfLines = {1}
            onChangeText = {(val) => setNewEvent({...newEvent, location : val})}
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
              placeholder = {formatted?.startDate || "DD/MM/YYYY"}
              onPress = {() => dispatch({type: "START_DATE_OPEN"})}
              placeholderTextColor={formatted.startDate && "#000"}
            />
            <CreateEventInputBox
              button = {true}
              iconSrc = {require("../../assets/icons/time-icon.png")}
              numberOfLines = {1}
              editable = {false}
              placeholder = {formatted.startTime || "00:00"}
              onPress = {() => dispatch({type: "START_TIME_OPEN"})}
              placeholderTextColor={formatted.startTime && "#000"}
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
              placeholder = {formatted.endDate || "DD/MM/YYYY"}
              onPress = {() => dispatch({type: "END_DATE_OPEN"})}
              placeholderTextColor={formatted.endDate && "#000"}
            />
            <CreateEventInputBox
              button = {true}
              iconSrc = {require("../../assets/icons/time-icon.png")}
              numberOfLines = {1}
              editable = {false}
              placeholder = {formatted.endTime || "00:00"}
              onPress = {() => dispatch({type: "END_TIME_OPEN"})}
              placeholderTextColor={formatted.endTime && "#000"}
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
              borderColor: "rgba(244, 198, 255, 1)",
              backgroundColor: colors.white,
              zIndex: 1,
              borderRadius: 10,
            }}
            style = {{
              backgroundColor: "rgba(240, 232, 242, 1)",
              borderWidth: 0.5,
              borderColor: "rgba(244, 198, 255, 1)",
            }}
            placeholderStyle={{ fontSize: 16 }}
            placeholder={newEvent?.group || ""}
            onPress={() => setOpenDropdown(!openDropdown)}
            keyExtractor={(item, index) => item}
            dropDownContainerStyle={{
              borderColor: colors.inputBorder,
              borderWidth: 0.2,
              borderColor: colors.borderColor,
            }}
            textStyle={{ fontSize: 16, }}
            onSelectItem={(val) => {
              setNewEvent({...newEvent, group: val.label})
              setOpenDropdown(false);
            }}
            labelStyle={{ fontSize: 16, }}
            listItemLabelStyle={{ fontSize: 16, }}
          />
        </View>
        
        <AppButton
          onPress = {() => {
            console.log(newEvent);
          }}
          title = {"Create Event"}
          style = {{marginVertical: 20}}
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