import React, {useState, useEffect, useContext} from "react";
import {View, Text, FlatList, ScrollView} from "react-native";
import {Calendar, LocaleConfig} from "react-native-calendars";
import EventDetails from "../components/CalendarScreen/EventDetails";
import CalendarHeader from "../components/CalendarScreen/CalendarHeader";
import { AuthContext } from "../context/AuthContext";
// import eventData from "../services/EventData";

const CalendarScreen = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  const {userInfo} = useContext(AuthContext);

  // const fetchEventDetails = () => {
  //   setIsLoading(true);

  //   axios
  //     .get(
  //       `${BASE_URL}/api/events`,
  //       {},
  //       {
  //         headers: {Authorization: `Bearer ${userInfo.token}`},
  //       }
  //     )
  //     .then((res) => {
  //       const eventData = res.data;
  //     })
  //     .catch((e) => {
  //       alert(`Error while getting event ${e}`);
  //       setIsLoading(false);
  //     });
  // };

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/api/events`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.token}`},
        }
      )
      .then((res) => {
        const eventData = res.data;
      })
      .catch((e) => {
        alert(`Error while getting event ${e}`);
        setIsLoading(false);
      });

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
