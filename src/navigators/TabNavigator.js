import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Settings from "../screens/Settings";
import People from "../screens/People";
import Calendar from "../screens/Calendar";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="People" component={People} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
