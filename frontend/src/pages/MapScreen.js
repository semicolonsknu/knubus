import React from 'react'
import { View, Dimensions } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

// 화면의 너비와 높이를 구합니다.
const { width, height } = Dimensions.get('window')

const images = [
  {
    // 이미지의 경로를 지정합니다. 로컬 이미지 대신 웹 이미지 URL도 사용할 수 있습니다.
    url: '',
    props: {
      // 여기에 로컬 이미지를 require로 불러오세요
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
