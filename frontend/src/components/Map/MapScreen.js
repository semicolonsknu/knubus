import React from 'react'
import { View } from 'react-native'
import KNUBus_Station from '../../data/KNUBus_Station.json'
import MapViewComponent from './MapViewComponent'
import ModalComponent from './ModalComponent'
import Station from './Station'
import { mapStyles } from '../../styles/MapStyles'
import { imageMap } from '../../utils/imageMap'
import { stationsUtils } from '../../utils/stationsUtils'
import InfoText from './InfoText'
import { useMapScreen } from '../../hooks/useMapScreen'

const MapScreen = () => {
  const { selectedLocation, modalVisible, handlePress, handleCloseModal } =
    useMapScreen()
  const stations = stationsUtils(KNUBus_Station, imageMap)

  return (
    <View style={mapStyles.container}>
      <MapViewComponent stations={stations} handlePress={handlePress} />
      <Station stations={stations} handlePress={handlePress} />
      <ModalComponent
        modalVisible={modalVisible}
        selectedLocation={selectedLocation}
        handleCloseModal={handleCloseModal}
      />
      <InfoText />
    </View>
  )
}

export default MapScreen
