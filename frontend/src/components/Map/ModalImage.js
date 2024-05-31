import React from 'react'
import { Image } from 'react-native'
import { modalStyles } from '../../styles/MapStyles'

const ModalImage = ({ image }) =>
  image ? <Image source={image} style={modalStyles.image} /> : null

export default ModalImage
