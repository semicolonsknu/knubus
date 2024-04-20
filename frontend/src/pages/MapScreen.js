import React, { useState, useCallback } from 'react'
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Modal,
  Vibration,
  StyleSheet,
} from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { goPaths, comePaths, locations } from '../data/locations'

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
    flex: 1,
  },

  // 스크롤뷰 ---------------------------------------------
  scrollView: {
    position: 'absolute',
    bottom: 32,
    left: 15,
    right: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  scrollImage: {
    width: 100,
    height: 110,
    marginRight: 10,
    borderRadius: 10,
  },

  // 버튼 ---------------------------------------------
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 5,
    marginRight: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  // 모달 창 ---------------------------------------------
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  modalContent: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    alignItems: 'center',
    padding: 25,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 15,
  },
  modalImage: {
    width: 280,
    height: 340,
    borderRadius: 15,
    marginBottom: 22,
  },

  // 텍스트 ---------------------------------------------
  topContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  topText: {
    padding: 10,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },
})

export default MapScreen
