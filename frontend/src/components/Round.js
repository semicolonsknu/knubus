import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import scheduleData from '../data/schedule.json'
import Timeline from './Timeline'

const Round = ({ isOperationDay }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(currentIndex)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let index = getCurrentIndex()
    if (index === -1) index = 9
    setCurrentIndex(index)
  }, [currentTime])

  const getCurrentIndex = () => {
    const currentHour = currentTime.getHours()
    const currentMinute = currentTime.getMinutes()

    for (let i = 0; i < scheduleData.schedule.length; i++) {
      const tables = scheduleData.schedule[i].tables

      const startHour = parseInt(tables['운행예정'].split(':')[0])
      const startMinute = parseInt(tables['운행예정'].split(':')[1])

      const endHour = parseInt(tables['운행종료 [미래도서관]'].split(':')[0])
      const endMinute = parseInt(tables['운행종료 [미래도서관]'].split(':')[1])

      if (
        (currentHour > startHour ||
          (currentHour === startHour && currentMinute >= startMinute)) &&
        (currentHour < endHour ||
          (currentHour === endHour && currentMinute <= endMinute))
      ) {
        return i
      }
    }

    return -1
  }

  const goToPrevious = () => {
    setSelectedIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prevIndex) =>
      Math.min(scheduleData.schedule.length - 1, prevIndex + 1)
    )
  }

  const goToNow = () => {
    setSelectedIndex(currentIndex)
  }

  if (!isOperationDay) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/public/Mascot.png')}
          style={styles.image}
        />
      </View>
    )
  }

  const currentRound = scheduleData.schedule[selectedIndex]
  const { round, tables } = currentRound

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{currentTime.toLocaleTimeString()}</Text>
      <Text style={styles.heading}>{round}</Text>

      <View style={styles.buttonContainer}>
        {selectedIndex > 0 && (
          <TouchableOpacity onPress={goToPrevious} style={styles.button}>
            <Text style={styles.buttonText}>이전 회차</Text>
          </TouchableOpacity>
        )}
        {selectedIndex !== currentIndex && (
          <TouchableOpacity onPress={goToNow} style={styles.button}>
            <Text style={styles.buttonText}>현재로 돌아오기</Text>
          </TouchableOpacity>
        )}
        {selectedIndex < scheduleData.schedule.length - 1 && (
          <TouchableOpacity onPress={goToNext} style={styles.button}>
            <Text style={styles.buttonText}>다음 회차</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.container}>
        <Timeline
          roundData={Object.entries(tables).map(([name, time]) => ({
            name,
            time,
          }))}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  time: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333333',
  },
  heading: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
})

export default Round
