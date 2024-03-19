import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './src/redux/store'

// Pages
import HomePage from './src/pages/HomePage'
import RoadMapPage from './src/pages/RoadMapPage'
import TimeTablePage from './src/pages/TimeTablePage'

// Components
import Navbar from './src/components/Navbar'

const Stack = createStackNavigator()

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navbar />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: 'KNUBus Home' }}
          />
          <Stack.Screen
            name="RoadMap"
            component={RoadMapPage}
            options={{ title: 'Bus Road Map' }}
          />
          <Stack.Screen
            name="TimeTable"
            component={TimeTablePage}
            options={{ title: 'Bus Time Table' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
