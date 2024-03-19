import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Navbar = ({ navigate }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigate('HomePage')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('RoadMapPage')}>
        <Text>RoadMap</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('TimeTablePage')}>
        <Text>TimeTable</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar
