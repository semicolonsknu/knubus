import { useState, useCallback } from 'react'
import { Vibration } from 'react-native'

export const useMapScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const handlePress = useCallback((location) => {
    setSelectedLocation(location)
    setModalVisible(true)
    Vibration.vibrate(200)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedLocation(null)
    setModalVisible(false)
    Vibration.vibrate(50)
  }, [])

  return {
    selectedLocation,
    modalVisible,
    handlePress,
    handleCloseModal,
  }
}
