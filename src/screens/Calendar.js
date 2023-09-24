import React, {useState, useEffect} from "react";
import {View, Text, FlatList, ScrollView} from "react-native";
import {Calendar, LocaleConfig} from "react-native-calendars";
import EventDetails from "../components/CalendarScreen/EventDetails";
import CalendarHeader from "../components/CalendarScreen/CalendarHeader";
import eventData from "../services/EventData";

const CalendarScreen = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   // Fetch event data from your API here and update the 'events' state.
  //   // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint.
  //   axios
  //     .get("YOUR_API_ENDPOINT")
  //     .then((response) => {
  //       const eventData = response.data;

  //       const marked = {};
  //       eventData.forEach((event) => {
  //         marked[event.date] = {marked: true};
  //       });

  //       setMarkedDates(marked);
  //       setEvents(eventData);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  useEffect(() => {
    // Use the eventData array instead of fetching data from an API
    const marked = {};
    eventData.forEach((event) => {
      marked[event.date] = {marked: true};
    });

    setMarkedDates(marked);
    setEvents(eventData);
  }, []);

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
        style={{borderRadius: 15,}}
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
