import React from 'react'
import { Text } from 'react-native'
import { modalStyles } from '../../styles/MapStyles'

const ModalText = ({ name }) => (
  <Text style={modalStyles.text}>{name ?? 'Select Location'}</Text>
)

export default ModalText
