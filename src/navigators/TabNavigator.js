import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Settings from "../screens/Settings";
import CalendarScreen from "../screens/Calendar";
import PeopleStack from "./PeopleStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Timeline" component={HomeStack} />
      <Tab.Screen name="People" component={PeopleStack} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
