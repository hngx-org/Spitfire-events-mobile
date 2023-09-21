import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import CreateEvent from "../screens/CreateEvent"

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator 
      screenOptions = {{headerShown: false}}
    >
      <Stack.Screen name = {"HomeScreen"} component = {Home}/>
      <Stack.Screen name = {"Create"} component = {CreateEvent}/>
    </Stack.Navigator>
  )
}

export default HomeStack