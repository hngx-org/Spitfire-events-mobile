import React, {useState, useEffect} from "react";
import {View, Text, FlatList, ScrollView} from "react-native";
import {Calendar, LocaleConfig} from "react-native-calendars";
import EventDetails from "../components/CalendarScreen/EventDetails";
import CalendarHeader from "../components/CalendarScreen/CalendarHeader";
import axios from "axios";

import eventData from "../services/EventData";

const CalendarScreen = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  // const {events, dispatch} = useDataContext();

 useEffect(() => {
   // Use the eventData array instead of fetching data from an API
   const marked = {};
   eventData.forEach((event) => {
     marked[event.date] = {marked: true};
   });

   setMarkedDates(marked);
   setEvents(eventData);
 }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://spitfire.onrender.com/api/events`
  //     )
  //     .then((res) => {
  //       const eventData = res.data;
  //       const marked = {};
  //       eventData.forEach((event) => {
  //         marked[event.date] = {marked: true};
  //       });

  //       setMarkedDates(marked);
  //       setEvents(eventData);
  //       console.log(eventData);
  //     })
  //     .catch((e) => {
  //       alert(`Error while getting event ${e}`);
  //     });

    
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://spitfire.onrender.com/api/events`,
  //       {}
  //     );
  //     const eventData = await response.json();
  //     console.log('hello');
  //     const marked = {};
  //     eventData.forEach((event) => {
  //       marked[event.date] = {marked: true};
  //     });

  //     setMarkedDates(marked);
  //     setEvents(eventData);
  //   };

  //   fetchData();
  // }, []);

  const calendarTheme = {
    calendarBackground: "#F0E8F2", // Background color of the calendar
    dayTextColor: "#87748C", // Text color of regular day numbers
    monthTextColor: "black", // Text color of month name
    arrowColor: "purple", // Color of arrows to navigate to next/previous month
    selectedDayBackgroundColor: "yellow", // Background color of selected day
    selectedDayTextColor: "#FFA500", // Text color of selected day
    todayTextColor: "#FFA500", // Text color of today's date
    dayNumColor: "#87748C", // Text color of regular day numbers
    textDayFontFamily: "System", // Font family for day text
    textMonthFontFamily: "System", // Font family for month text
    textDayHeaderFontFamily: "System", // Font family for day header text
  };

  return (
    <View
      style={{
        paddingTop: 18,
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: "#FFFCFD",
      }}
    >
      <CalendarHeader />
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          borderRadius: 20,
        }}
      >
        <Calendar
          style={{borderRadius: 15}}
          markedDates={markedDates}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          theme={calendarTheme} // Apply the custom theme
        />
      </View>

      {selectedDate && (
        <View>
          <FlatList
            data={events.filter((event) => event.date === selectedDate)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={EventDetails}
          />
        </View>
      )}
    </View>
  );
};

export default CalendarScreen;
