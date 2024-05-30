import React, { useState, useCallback } from 'react'
import { View, Text } from 'react-native'
import KNUBus_Station from '../../data/KNUBus_Station.json'
import MapViewComponent from './MapViewComponent'
import ModalComponent from './ModalComponent'
import Station from './Station'
import { mapStyles } from '../../styles/MapStyles'

const imageMap = {
  'map/1.jpg': require('../../../assets/public/map/1.jpg'),
  'map/2.jpg': require('../../../assets/public/map/2.jpg'),
  'map/3.jpg': require('../../../assets/public/map/3.jpg'),
  'map/4.jpg': require('../../../assets/public/map/4.jpg'),
  'map/5.jpg': require('../../../assets/public/map/5.jpg'),
  'map/6.jpg': require('../../../assets/public/map/6.jpg'),
  'map/7.jpg': require('../../../assets/public/map/7.jpg'),
  'map/8.jpg': require('../../../assets/public/map/8.jpg'),
  'map/9.jpg': require('../../../assets/public/map/9.jpg'),
  'map/10.jpg': require('../../../assets/public/map/10.jpg'),
  'map/11.jpg': require('../../../assets/public/map/11.jpg'),
}

const stations = KNUBus_Station.station.map((location) => ({
  ...location,
  image: imageMap[location.image],
}))

const MapScreen = () => {
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

  return (
    <View style={mapStyles.container}>
      <MapViewComponent stations={stations} handlePress={handlePress} />
      <Station stations={stations} handlePress={handlePress} />
      <ModalComponent
        modalVisible={modalVisible}
        selectedLocation={selectedLocation}
        handleCloseModal={handleCloseModal}
      />
      <View style={mapStyles.topContainer}>
        <Text style={mapStyles.topText}>
          정류장을 클릭하면, 이미지가 표시됩니다.
        </Text>
      </View>
    </View>
  )
}

export default MapScreen
