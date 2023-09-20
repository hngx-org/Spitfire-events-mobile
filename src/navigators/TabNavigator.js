import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import People from "../screens/People";
import CalendarScreen from "../screens/Calendar";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#FFFFFF',
      },
      tabBarActiveTintColor: '#730394',
      }}
      
      >
      <Tab.Screen name="Timeline" component={Home} options={{
        tabBarIcon: ({size, color}) => (
          <MaterialIcons name="timeline" size={size} color={color} />
        )
        
        }}/>
      <Tab.Screen name="People" component={People} options={{
        tabBarIcon: ({size, color}) => (
          <Octicons name="people" size={size} color={color} />
        )
        }}/>
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{
        tabBarIcon: ({size, color}) => (
          <Feather name="calendar" size={size} color={color} />
        )
        }}/>
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon: ({size, color}) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        )
        }}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;
