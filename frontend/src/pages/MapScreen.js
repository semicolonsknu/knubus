import React, { useState, useCallback } from 'react'
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Modal,
  Vibration,
  Dimensions,
  StyleSheet,
} from 'react-native'
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import KNUBus_Route from '../data/KNUBus_Route.json'
import KNUBus_Station from '../data/KNUBus_Station.json'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

const imageMap = {
  'map/1.jpg': require('../../assets/public/map/1.jpg'),
  'map/2.jpg': require('../../assets/public/map/2.jpg'),
  'map/3.jpg': require('../../assets/public/map/3.jpg'),
  'map/4.jpg': require('../../assets/public/map/4.jpg'),
  'map/5.jpg': require('../../assets/public/map/5.jpg'),
  'map/6.jpg': require('../../assets/public/map/6.jpg'),
  'map/7.jpg': require('../../assets/public/map/7.jpg'),
  'map/8.jpg': require('../../assets/public/map/8.jpg'),
  'map/9.jpg': require('../../assets/public/map/9.jpg'),
  'map/10.jpg': require('../../assets/public/map/10.jpg'),
  'map/11.jpg': require('../../assets/public/map/11.jpg'),
}

const station = KNUBus_Station.station.map((location) => ({
  ...location,
  image: imageMap[location.image],
}))

const MapScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const onButtonPress = useCallback((location) => {
    setSelectedLocation(location)
    setModalVisible(true)
    Vibration.vibrate(200)
  }, [])

  const closeModal = useCallback(() => {
    setSelectedLocation(null)
    setModalVisible(false)
    Vibration.vibrate(50)
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE} // Google 지도를 사용하도록 설정
        initialRegion={{
          latitude: 37.8673971,
          longitude: 127.7456842,
          latitudeDelta: 0.013,
          longitudeDelta: 0.0025,
        }}
      >
        {station.map((loc) => (
          <Marker
            key={loc.name}
            coordinate={loc.coords}
            onPress={() => onButtonPress(loc)}
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
      <ScrollView
        horizontal
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {station.map((loc) => (
          <Pressable key={loc.name} onPress={() => onButtonPress(loc)}>
            <Image source={loc.image} style={styles.scrollImage} />
          </Pressable>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              {selectedLocation?.name ?? 'Select Location'}
            </Text>
            <Image source={selectedLocation?.image} style={styles.modalImage} />
            <Pressable style={styles.button} onPress={closeModal}>
              <Text style={styles.buttonText}>돌아가기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>
          정류장을 클릭하면, 이미지가 표시됩니다.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    position: 'absolute',
    bottom: scale(35),
    left: scale(15),
    right: scale(15),
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    borderRadius: scale(7),
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(6) },
    shadowOpacity: 0.1,
    shadowRadius: scale(10),
    elevation: 3,
  },
  scrollImage: {
    width: scale(90),
    height: scale(100),
    marginRight: scale(10),
    borderRadius: scale(7),
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: scale(20),
    paddingVertical: scale(8),
    paddingHorizontal: scale(22),
    marginLeft: scale(4),
    marginRight: scale(4),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(2),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scale(12),
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
  },
  modalContent: {
    backgroundColor: '#F5F5F5',
    borderRadius: scale(7),
    alignItems: 'center',
    padding: scale(15),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    fontSize: scale(17),
    fontWeight: '600',
    color: '#2C3E50',
  },
  modalImage: {
    width: scale(230),
    height: scale(300),
    borderRadius: scale(7),
    marginVertical: scale(12),
    marginHorizontal: scale(5),
  },
  topContainer: {
    position: 'absolute',
    top: scale(40),
    left: 40,
    right: 40,
    borderRadius: scale(7),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  topText: {
    textAlign: 'center',
    padding: scale(7),
    paddingHorizontal: scale(10),
    color: '#FFFFFF',
    fontSize: scale(12),
    fontWeight: '400',
  },
})

export default MapScreen
