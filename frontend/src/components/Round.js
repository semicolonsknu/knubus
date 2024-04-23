import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Image,
  Vibration,
  Animated,
  Dimensions,
} from 'react-native'
import scheduleData from '../data/schedule.json'
import Timeline from './Timeline'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

const Round = ({ isOperation }) => {
  // 현재 시간과 인덱스 관리 --------------------------------------------------------------
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // 현재 시간 갱신 --------------------------------------------------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 현재 인덱스 갱신 --------------------------------------------------------------
  useEffect(() => {
    let index = getCurrentIndex()
    if (index === -1) index = 9
    setCurrentIndex(index)
  }, [currentTime])

  useEffect(() => {
    const initialIndex = getCurrentIndex()
    if (initialIndex !== -1) {
      setSelectedIndex(initialIndex)
    }
  }, [])

  // 인덱스 계산 --------------------------------------------------------------
  const getCurrentIndex = () => {
    const currentHour = currentTime.getHours()
    const currentMinute = currentTime.getMinutes()

    for (let i = 0; i < scheduleData.schedule.length; i++) {
      const { tables } = scheduleData.schedule[i]

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

  // 버튼 --------------------------------------------------------------
  const goToPrevious = () => {
    Vibration.vibrate(50)
    setSelectedIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    Vibration.vibrate(50)
    setSelectedIndex((prevIndex) =>
      Math.min(scheduleData.schedule.length - 1, prevIndex + 1)
    )
  }

  const goToNow = () => {
    Vibration.vibrate(200)
    setSelectedIndex(currentIndex)
  }

  // 깜빡임 효과 --------------------------------------------------------------
  const [fadeAnim] = useState(new Animated.Value(0.5))

  useEffect(() => {
    let animation

    if (selectedIndex !== currentIndex) {
      animation = Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.5,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      )
      animation.start()
    }

    return () => {
      if (animation) {
        animation.stop()
      }
    }
  }, [selectedIndex, fadeAnim])

  // !isOperation --------------------------------------------------------------
  const [toggle, setToggle] = useState(false)

  const toggleImage = () => {
    setToggle(!toggle)
  }
  if (!isOperation) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleImage} style={styles.imageContainer}>
          <Image
            source={
              toggle
                ? require('../../assets/public/Mascot1.png')
                : require('../../assets/public/Mascot0.png')
            }
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const currentRound = scheduleData.schedule[selectedIndex]
  const { round, tables } = currentRound

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{currentTime.toLocaleTimeString()}</Text>
      <Text style={styles.roundText}>{round}</Text>

      <View style={styles.stateListContainer}>
        {selectedIndex > 0 && (
          <Pressable onPress={goToPrevious} style={styles.button}>
            <Text style={styles.buttonText}>이전 회차</Text>
          </Pressable>
        )}
        {selectedIndex !== currentIndex && (
          <Animated.View style={[styles.buttonTo, { opacity: fadeAnim }]}>
            <Pressable onPress={goToNow}>
              <Text style={styles.buttonText}>현재 회차로</Text>
            </Pressable>
          </Animated.View>
        )}
        {selectedIndex < scheduleData.schedule.length - 1 && (
          <Pressable onPress={goToNext} style={styles.button}>
            <Text style={styles.buttonText}>다음 회차</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.roundContainer}>
        <View style={styles.stateListContainer}>
          <View style={styles.stateContainer}>
            <View style={[styles.state, { backgroundColor: '#B0BEC5' }]} />
            <Text style={styles.stateText}>운행 종료</Text>
          </View>
          <View style={styles.stateContainer}>
            <View style={[styles.state, { backgroundColor: '#FF5757' }]} />
            <Text style={styles.stateText}>현재 운행</Text>
          </View>
          <View style={styles.stateContainer}>
            <View style={[styles.state, { backgroundColor: '#38B6FF' }]} />
            <Text style={styles.stateText}>운행 예정</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            실제 운행과 약간의 오차가 존재 할 수 있음
          </Text>
        </View>

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
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(20),
    paddingVertical: scale(15),
  },
  timeText: {
    fontSize: scale(15),
    fontWeight: '500',
    marginBottom: scale(3),
    color: '#2c3e50',
  },
  roundText: {
    fontSize: scale(25),
    fontWeight: '700',
    marginBottom: scale(10),
    color: '#4A90E2',
  },
  stateListContainer: {
    flexDirection: 'row',
    marginBottom: scale(10),
    justifyContent: 'center',
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
  buttonTo: {
    backgroundColor: '#50E3C2',
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
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(200),
    height: scale(200),
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
  roundContainer: {
    flex: 1,
    marginTop: scale(5),
    height: '100%',
    width: '100%',
  },
  stateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(5),
    marginRight: scale(5),
  },
  state: {
    width: scale(10),
    height: scale(15),
    borderRadius: scale(10),
    marginHorizontal: scale(5),
  },
  stateText: {
    marginLeft: scale(5),
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: scale(7),
    borderRadius: scale(5),
    marginBottom: scale(15),
  },
  infoText: {
    color: '#2c3e50',
    fontSize: scale(12),
  },
})

export default Round
