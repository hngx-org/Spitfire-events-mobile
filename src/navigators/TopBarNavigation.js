import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FriendEvents from "../screens/FriendEvents"
import AllEvents from "../screens/AllEvents"

const Tab = createMaterialTopTabNavigator();

const TopBarNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Everyone"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 16, fontWeight: "bold", textTransform: "capitalize" },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarIndicatorStyle: {backgroundColor: "rgba(124, 20, 155, 1)",}
      }}
      
    >
      <Tab.Screen
        name="Friends"
        component={FriendEvents}
      />
      <Tab.Screen
        name="Everyone"
        component={AllEvents}
      />
      
    </Tab.Navigator>
  );
}

export default TopBarNavigator