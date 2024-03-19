import React from 'react'
import { View, Text } from 'react-native'

const DateComponent = () => {
  const currentDate = new Date().toLocaleDateString()

  return (
    <View>
      <Text>{currentDate}</Text>
    </View>
  )
}

export default DateComponent
