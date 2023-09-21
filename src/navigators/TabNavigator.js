import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Settings from "../screens/Settings";
import People from "../screens/People";
import CalendarScreen from "../screens/Calendar";
import { Ionicons } from '@expo/vector-icons';
import colors from "../layouts/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({color, focused, size}) => {
        let iconName;
        if (route.name === 'Timeline') {
          iconName = focused ? 'analytics-sharp' : 'analytics-outline';
          primarygrey = focused ? colors.primary : 'grey';
        } else if(route.name ==='People') {
          iconName = focused ? 'ios-people' : 'ios-people-outline';
          primarygrey = focused ? colors.primary : 'grey';
        } else if(route.name ==='Calendar') {
          iconName = focused ? 'ios-today' : 'ios-today-sharp';
          primarygrey = focused ? colors.primary : 'grey';
        } else if(route.name ==='Settings') {
          iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          primarygrey = focused ? colors.primary : 'grey';
        } 
        return <Ionicons name={iconName} size={24} style={{color: primarygrey}} />
      },
      tabBarActiveTintColor: colors.primary,
      headerShown: false,
      })}
    >
      <Tab.Screen 
      name="Timeline" component={HomeStack} />
      <Tab.Screen name="People" component={People} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
