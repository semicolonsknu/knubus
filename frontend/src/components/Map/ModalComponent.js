import React from 'react'
import { Modal, View, Text, Image, Pressable } from 'react-native'
import { modalStyles } from '../../styles/MapStyles'

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
    <View style={modalStyles.modalContainer}>
      <View style={modalStyles.modalContent}>
        <Text style={modalStyles.modalText}>
          {selectedLocation?.name ?? 'Select Location'}
        </Text>
        <Image
          source={selectedLocation?.image}
          style={modalStyles.modalImage}
        />
        <Pressable style={modalStyles.button} onPress={handleCloseModal}>
          <Text style={modalStyles.buttonText}>돌아가기</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
)

export default ModalComponent
