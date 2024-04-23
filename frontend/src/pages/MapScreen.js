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
import { goPaths, comePaths, locations } from '../data/locations'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

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
          latitude: 37.8690771,
          longitude: 127.7446742,
          latitudeDelta: 0.01,
          longitudeDelta: 0.0025,
        }}
      >
        {locations.map((loc) => (
          <Marker
            key={loc.name}
            coordinate={loc.coords}
            onPress={() => onButtonPress(loc)}
            pinColor={loc.color}
          />
        ))}
        {goPaths.map((path, index) => (
          <Polyline
            key={`goPath-${index}`}
            coordinates={path}
            strokeColor="#FF5757"
            strokeWidth={6}
          />
        ))}
        {comePaths.map((path, index) => (
          <Polyline
            key={`comePath-${index}`}
            coordinates={path}
            strokeColor="#38B6FF"
            strokeWidth={6}
          />
        ))}
      </MapView>
      <ScrollView
        horizontal
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {locations.map((loc) => (
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
          정류장을 클릭하면 해당 정류장의 이미지가 표시됩니다.
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
    borderRadius: scale(10),
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
    borderRadius: scale(10),
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: scale(20),
    paddingVertical: scale(8),
    paddingHorizontal: scale(20),
    marginLeft: scale(5),
    marginRight: scale(5),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(2),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scale(15),
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  modalContent: {
    backgroundColor: '#F5F5F5',
    borderRadius: scale(15),
    alignItems: 'center',
    padding: scale(25),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    fontSize: scale(20),
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: scale(15),
  },
  modalImage: {
    width: scale(260),
    height: scale(340),
    borderRadius: scale(15),
    marginBottom: scale(22),
  },
  topContainer: {
    position: 'absolute',
    top: scale(40),
    left: scale(30),
    right: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  topText: {
    padding: scale(10),
    paddingHorizontal: scale(20),
    color: '#FFFFFF',
    fontSize: scale(13),
    fontWeight: '400',
  },
})

export default MapScreen
