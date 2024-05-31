import React from 'react'
import { Modal, View } from 'react-native'
import { modalStyles } from '../../styles/MapStyles'
import ModalLayout from './ModalLayout'

const ModalComponent = ({
  modalVisible,
  selectedLocation,
  handleCloseModal,
}) => (
  <Modal
    animationType="slide"
    transparent
    visible={modalVisible}
    onRequestClose={handleCloseModal}
  >
    <View style={modalStyles.container}>
      <ModalLayout
        selectedLocation={selectedLocation}
        handleCloseModal={handleCloseModal}
      />
    </View>
  </Modal>
)

export default ModalComponent
