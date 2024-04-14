import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Info = () => {
  return (
    <View style={styles.timelineContainer}>
      <View style={styles.buttonContainer}>
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: '#B0BEC5' }]} />
          <Text style={styles.circleText}>운영 종료</Text>
        </View>
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: '#FF5757' }]} />
          <Text style={styles.circleText}>현재 운행</Text>
        </View>
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: '#38B6FF' }]} />
          <Text style={styles.circleText}>운행 예정</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          실제 운행과 약간의 오차가 존재 할 수 있음
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  timelineContainer: {
    flex: 1,
    marginTop: 5,
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  circle: {
    width: 10,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  circleText: {
    marginLeft: 5,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 7,
    borderRadius: 5,
    marginBottom: 5,
  },
  infoText: {
    color: '#4A4A4A',
    fontSize: 12,
  },
})

export default Info
