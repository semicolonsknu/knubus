import React from 'react'
import { ScrollView, Pressable, Image } from 'react-native'
import { stationStyles } from '../../styles/MapStyles'

const Station = ({ stations, handlePress }) => (
  <ScrollView
    horizontal
    style={stationStyles.scrollView}
    showsHorizontalScrollIndicator={false}
  >
    {stations.map((loc) => (
      <Pressable key={loc.name} onPress={() => handlePress(loc)}>
        <Image source={loc.image} style={stationStyles.scrollImage} />
      </Pressable>
    ))}
  </ScrollView>
)

export default Station
