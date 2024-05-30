import React from 'react'
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import MarkerComponent from './MarkerComponent'
import KNUBusRoute from '../../data/KNUBus_Route.json'
import { initialRegion, polylineColors } from './MapConfig'

const MapViewComponent = ({ stations, handlePress }) => (
  <MapView
    style={{ flex: 1 }}
    provider={PROVIDER_GOOGLE}
    initialRegion={initialRegion}
  >
    {stations.map((loc) => (
      <MarkerComponent key={loc.name} loc={loc} handlePress={handlePress} />
    ))}
    <Polyline
      coordinates={KNUBusRoute.route.go}
      strokeColor={polylineColors.go}
      strokeWidth={6}
    />
    <Polyline
      coordinates={KNUBusRoute.route.come}
      strokeColor={polylineColors.come}
      strokeWidth={6}
    />
  </MapView>
)

export default MapViewComponent
