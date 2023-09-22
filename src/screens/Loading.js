import { View, ActivityIndicator } from "react-native"
import { useEffect } from "react"
import colors from "../layouts/colors"

const Loading = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Tabs")
    }, 4000)
  }, [])
  
  return (
    <View style = {{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <ActivityIndicator 
        animating = {true}
        color = {colors.primary}
        size = {"large"}
      />
    </View>
  )
}

export default Loading