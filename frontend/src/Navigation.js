import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons' 

import HomeScreen from './pages/HomeScreen'
import MapScreen from './pages/MapScreen'
import TimeScreen from './pages/TimeScreen'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === '운행노선도') {
              iconName = focused ? 'map' : 'map-outline'
            } else if (route.name === '운행시간표') {
              iconName = focused ? 'time' : 'time-outline'
            }
            return <Icon name={iconName} size={size} color={color} />
          },
          headerShown: false,

          tabBarActiveTintColor: '#0047bb', 
          tabBarInactiveTintColor: '#0f3c87', 
          tabBarLabelStyle: {
            marginBottom: 5,
          },
          tabBarStyle: {
            height: 65,
            paddingVertical: 10, // Increase padding for larger touch area
            paddingBottom: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="운행노선도" component={MapScreen} />
        <Tab.Screen name="운행시간표" component={TimeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
