import { View, ActivityIndicator, Text } from "react-native"
import { useEffect } from "react"
import colors from "../layouts/colors"
import { useNavigation } from "@react-navigation/native"


const Loading = ({ navigation, }) => {
  // const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      // navigation.replace("Tabs")
      navigation.reset({
        index: 0,
        routes: [{name: "Tabs"}]
      })
      // navigation.navigate("Tabs")
    }, 4000)
  }, [])
  
  return (
    <View style = {{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Hello</Text>
      <ActivityIndicator 
        animating = {true}
        color = {colors.primary}
        size = {"large"}
      />
    </View>
  )
}

export default Loading