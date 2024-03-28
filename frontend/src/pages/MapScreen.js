import React from 'react'
import { View, Dimensions } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

// 화면의 너비와 높이를 구합니다.
const { width, height } = Dimensions.get('window')

const images = [
  {
    url: '',
    props: {
      source: require('../../assets/public/Map.png'),
    },
  },
]

const MapScreen = () => {
  return (
    <View style={{ flex: 1, width: width, height: height }}>
      <ImageViewer imageUrls={images} />
    </View>
  )
}

export default MapScreen
