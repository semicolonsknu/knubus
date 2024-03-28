import React from 'react';
import { View, Text, Button } from 'react-native';
//import StackNavigation from './Stack';
//import { NavigationContainer } from '@react-navigation/native';

//import ButtonNav from './ButtonNav';
//import HomePage from './pages/HomePage'
//import TimeTablePage from '../pages/TimeTablePage';
//import RoadMapPage from './src/pages/RoadMapPage'
//import TimeTablePage from './src/pages/TimeTablePage'



const Navbar = ({ navigation }) => {
  return (
    <View>
       {/* HomePage */}
       <Button 
        title = "HomePage"
        onPress={() => navigation.navigate('HomePage')}
       />
      {/*<HomePage />*/}


       {/* RoadMapPage */}
       <Button 
        title = "RoadMap" 
        onPress={() => navigation.navigate('RoadMap')}
      />
      {/*<RoadMapPage />*/}
      

      {/* TimeTablePage */}
        
      <Button 
        title = "TimeTable" 
        onPress={() => navigation.navigate('TimeTable')}
      />
      {/*<TimeTablePage />*/}

    </View>
  );
};

export default Navbar;
