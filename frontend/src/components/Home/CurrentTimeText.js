import React from 'react'
import { Text } from 'react-native'
import { roundStyles } from '../../styles/roundStyles'

const CurrentTimeText = ({ currentTime }) => {
  const formattedTime = currentTime.toLocaleTimeString()
  return <Text style={roundStyles.timeText}>{formattedTime}</Text>
}

export default CurrentTimeText
