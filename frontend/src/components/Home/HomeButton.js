import React from 'react'
import { Pressable, Text } from 'react-native'
import { homeScreenStyles } from '../../styles/homeScreenStyles'

const HomeButton = ({ onPress, text, style }) => (
  <Pressable style={[homeScreenStyles.button, style]} onPress={onPress}>
    <Text style={homeScreenStyles.buttonText}>{text}</Text>
  </Pressable>
)

export default HomeButton
