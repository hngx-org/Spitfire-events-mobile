import React, {useState, useEffect} from "react";
import {View, Text, FlatList} from "react-native";
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

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 24,
        backgroundColor: "#FAFAFC",
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
          markedDates={markedDates}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          style={{
            borderColor: "gray",
            borderRadius: 20,
          }}
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
