// import {View, Text, Image, StyleSheet} from "react-native";
// import colors from "../layouts/colors";
// import openSans from "../layouts/fonts";
// import TextOpen from "./TextOpen";

// const EventItem = () => {
//   return (
//     <View style={styles.box}>
//       <View style={{marginRight: 10}}>
//         <Image
//           source={require("../../assets/images/cartoon.png")}
//           style={{width: 50, height: 50}}
//         />
//       </View>

//       <View style = {{gap: 5, flex: 1}}>
//         <TextOpen 
//           style = {styles.title}
//           font = {"OpenSans_700Bold"}
//         >Football Game</TextOpen>
//         <TextOpen 
//           style = {styles.date}
//           font = {"OpenSans_600SemiBold"}
//         >May 20, 2023</TextOpen>
//         <TextOpen 
//           style = {styles.time}
//           font = {"OpenSans_600SemiBold"}
//         >Friday 4-6pm</TextOpen>
//         <TextOpen 
//           style = {styles.location}
//           font = {"OpenSans_700Bold"}
//         >Teslim Balogun Stadium</TextOpen>
//       <View/>

//       <View
//         style={{
//           justifyContent: "space-between",
//           gap: 70,
//           alignItems: "flex-end",
//         }}
//       >
//         <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
//           <View
//             style={{
//               padding: 3,
//               backgroundColor: "rgba(0, 200, 0, 1)",
//               borderRadius: 3,
//             }}
//           ></View>
//           <Text
//             style={{
//               fontSize: 16,
//               fontWeight: "bold",
//               color: "rgba(124, 20, 155, 1)",
//             }}
//           >
//             LIVE
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// // export default EventItem;

// const styles = StyleSheet.create({
//   box: {
//     backgroundColor: "rgba(240, 232, 242, 1)",
//     borderWidth: 0.5,
//     borderColor: "rgba(244, 198, 255, 1)",
//     padding: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 18,
//     color: "rgba(124, 20, 155, 1)",
//   },
//   date: {
//     color: "#000",
//     fontSize: 16,
//   },
//   time: {
//     color: "#000",
//     fontSize: 14,
//   },
//   location: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#f49400",
//   },
// });
