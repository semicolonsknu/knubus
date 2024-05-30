import React from 'react'
import { Pressable, Text } from 'react-native'
import { buttonStyles } from '../../styles/MapStyles'

const ModalButton = ({ onPress, title }) => (
  <Pressable style={buttonStyles.container} onPress={onPress}>
    <Text style={buttonStyles.text}>{title}</Text>
  </Pressable>
)

export default ModalButton
