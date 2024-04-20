import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import ErrorBoundary from './ErrorBoundary'
import HomeScreen from './pages/HomeScreen'
import MapScreen from './pages/MapScreen'
import TimeScreen from './pages/TimeScreen'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <ErrorBoundary>
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
            tabBarActiveTintColor: styles.activeTab.color,
            tabBarInactiveTintColor: styles.inactiveTab.color,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarStyle: styles.tabBar,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="운행노선도" component={MapScreen} />
          <Tab.Screen name="운행시간표" component={TimeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 65,
    paddingVertical: 10,
    paddingBottom: 5,
  },
  tabBarLabel: {
    marginBottom: 5,
  },
  activeTab: {
    color: '#4A90E2',
  },
  inactiveTab: {
    color: '#4A4A4A',
  },
})

export default Navigation
