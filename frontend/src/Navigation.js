import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons' // Adjust import as needed for Expo

// Import screens
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

            // Conditionally set the icon name based on the route and focus state
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline'
            } else if (route.name === 'Time') {
              iconName = focused ? 'time' : 'time-outline'
            }

            // Return the icon component
            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#0000ff', // 메인 색상 for active icon
          tabBarInactiveTintColor: '#0f3c87', // 어두운 색상 for inactive icon
          tabBarLabelStyle: {
            marginBottom: 5,
          },
          tabBarStyle: {
            height: 65,
            paddingVertical: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Time" component={TimeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
