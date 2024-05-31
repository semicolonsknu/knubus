import React from 'react'
import { Text } from 'react-native'
import { homeScreenStyles } from '../../styles/homeScreenStyles'

const DateNameText = ({ dateName, textColor }) => {
  if (!dateName) return null

  return (
    <Text style={[homeScreenStyles.dateNameText, textColor]}>{dateName}</Text>
  )
}

export default DateNameText
