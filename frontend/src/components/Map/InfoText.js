import React from 'react'
import { View, Text } from 'react-native'
import { mapStyles } from '../../styles/MapStyles'

const InfoText = () => (
  <View style={mapStyles.textContainer}>
    <Text style={mapStyles.text}>정류장을 클릭하면, 이미지가 표시됩니다.</Text>
  </View>
)

export default InfoText
