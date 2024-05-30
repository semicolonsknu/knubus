import React from 'react'
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import KNUBus_Route from '../../data/KNUBus_Route.json'

const MapViewComponent = ({ stations, handlePress }) => (
  <MapView
    style={{ width: '100%', height: '100%' }}
    provider={PROVIDER_GOOGLE}
    initialRegion={{
      latitude: 37.8673971,
      longitude: 127.7456842,
      latitudeDelta: 0.013,
      longitudeDelta: 0.0025,
    }}
  >
    {stations.map((loc) => (
      <Marker
        key={loc.name}
        coordinate={loc.coords}
        onPress={() => handlePress(loc)}
        pinColor={loc.color}
      />
    ))}
    <Polyline
      coordinates={KNUBus_Route.route.go}
      strokeColor="#FF5757"
      strokeWidth={6}
    />
    <Polyline
      coordinates={KNUBus_Route.route.come}
      strokeColor="#38B6FF"
      strokeWidth={6}
    />
  </MapView>
)

export default MapViewComponent
