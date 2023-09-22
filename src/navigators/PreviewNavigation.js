import { createStackNavigator } from "@react-navigation/stack"
import Onboarding from "../screens/Onboarding"
import Loading from "../screens/Loading"
import TabNavigator from "./TabNavigator"

const Stack = createStackNavigator()

const PreviewStack = () => {
  return (
    <Stack.Navigator 
      screenOptions = {{headerShown: false}}
    >
      <Stack.Screen name = {"Onboarding"} component = {Onboarding}/>
      <Stack.Screen name = {"Loading"} component = {Loading}/>
      <Stack.Screen name = {"Tabs"} component = {TabNavigator}/>
    </Stack.Navigator>
  )
}

export default PreviewStack