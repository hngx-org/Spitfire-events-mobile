import { createContext, useState } from "react"

export const EventContext = createContext(null)

const EventContextProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Movie Night",
      location: "Genesis cinemas, Festac",
      start_time: "10:00 AM",
      end_time: "12:00 PM",
      date: "2023-09-20", // Use ISO date format (YYYY-MM-DD)
      thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
      friend: true,
    },
    {
      id: 2,
      title: "Event 23",
      location: "Elm St, Town, Country",
      start_time: "2:00 PM",
      end_time: "4:00 PM",
      date: "2023-09-22",
      thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
      friend: false,
    },
    {
      id: 3,
      title: "Tech Conference",
      location: "Tech Center, City",
      start_time: "9:30 AM",
      end_time: "5:00 PM",
      date: "2023-09-25",
      thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
      friend: false,
    },
    {
      id: 4,
      title: "Art Exhibition",
      location: "Art Gallery, Downtown",
      start_time: "11:00 AM",
      end_time: "7:00 PM",
      date: "2023-09-28",
      thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
      friend: true,
    },
  ])
  
  return (
    <EventContext.Provider value = {{events, setEvents}}>
      {children}
    </EventContext.Provider>
  )
}

export default EventContextProvider