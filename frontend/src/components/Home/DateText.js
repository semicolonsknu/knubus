import React from 'react'
import { Text } from 'react-native'
import { formatFullDate } from '../../utils/dateUtils'
import { homeScreenStyles } from '../../styles/homeScreenStyles'

const DateText = ({ selectedDate, dateColor }) => {
  return (
    <Text style={[homeScreenStyles.dateText, dateColor()]}>
      {formatFullDate(selectedDate)}
    </Text>
  )
}

export default DateText
