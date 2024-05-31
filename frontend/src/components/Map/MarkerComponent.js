import React from 'react'
import { Marker } from 'react-native-maps'

const MarkerComponent = ({ loc, handlePress }) => (
  <Marker
    key={loc.name}
    coordinate={loc.coords}
    onPress={() => handlePress(loc)}
    pinColor={loc.color}
  />
)

export default MarkerComponent
