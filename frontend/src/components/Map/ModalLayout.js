import React from 'react'
import { View } from 'react-native'
import { modalStyles } from '../../styles/MapStyles'
import ModalText from './ModalText'
import ModalImage from './ModalImage'
import ModalButton from './ModalButton'

const ModalLayout = ({ selectedLocation, handleCloseModal }) => (
  <View style={modalStyles.content}>
    <ModalText name={selectedLocation?.name} />
    <ModalImage image={selectedLocation?.image} />
    <ModalButton onPress={handleCloseModal} title="돌아가기" />
  </View>
)

export default ModalLayout
