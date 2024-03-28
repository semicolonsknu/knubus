import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import RoadMapPage from '../pages/RoadMapPage';
import TimeTablePage from '../pages/TimeTablePage';

const Stack = createStackNavigator();

const StackNavigation =() => {
    return (
        <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name= "HomePage" component={HomePage} />
    <Stack.Screen name= "RoadMapPage" component={RoadMapPage} />
    <Stack.Screen name= "TimeTablePage" component={TimeTablePage} />
  </Stack.Navigator>
  </NavigationContainer>
    );
};

export default StackNavigation;