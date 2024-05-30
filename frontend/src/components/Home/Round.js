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
import KNUBus_Timetable from '../../data/KNUBus_Timetable.json'
import Timeline from './Timeline'
import { roundStyles } from '../../styles/HomeStyles'

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

    for (let i = 0; i < KNUBus_Timetable.timetable.length; i++) {
      const { tables } = KNUBus_Timetable.timetable[i]

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
      Math.min(KNUBus_Timetable.timetable.length - 1, prevIndex + 1)
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
      <View style={roundStyles.container}>
        <TouchableOpacity
          onPress={toggleImage}
          style={roundStyles.imageContainer}
        >
          <Image
            source={
              toggle
                ? require('../../../assets/public/Mascot1.png')
                : require('../../../assets/public/Mascot0.png')
            }
            style={roundStyles.image}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const currentRound = KNUBus_Timetable.timetable[selectedIndex]
  const { round, tables } = currentRound

  return (
    <View style={roundStyles.container}>
      <View style={roundStyles.textContainer}>
        <Text style={roundStyles.wText}>222222</Text>
        <Text style={roundStyles.roundText}>{round}</Text>
        <Text style={roundStyles.timeText}>
          {currentTime.toLocaleTimeString()}
        </Text>
      </View>

      <View style={roundStyles.stateListContainer}>
        {selectedIndex > 0 && (
          <Pressable onPress={goToPrevious} style={roundStyles.button}>
            <Text style={roundStyles.buttonText}>이전 회차</Text>
          </Pressable>
        )}
        {selectedIndex !== currentIndex && (
          <Animated.View style={[roundStyles.buttonTo, { opacity: fadeAnim }]}>
            <Pressable onPress={goToNow}>
              <Text style={roundStyles.buttonText}>현재 회차로</Text>
            </Pressable>
          </Animated.View>
        )}
        {selectedIndex < KNUBus_Timetable.timetable.length - 1 && (
          <Pressable onPress={goToNext} style={roundStyles.button}>
            <Text style={roundStyles.buttonText}>다음 회차</Text>
          </Pressable>
        )}
      </View>

      <View style={roundStyles.roundContainer}>
        <View style={roundStyles.stateListContainer}>
          <View style={roundStyles.stateContainer}>
            <View style={[roundStyles.state, { backgroundColor: '#B0BEC5' }]} />
            <Text style={roundStyles.stateText}>운행 종료</Text>
          </View>
          <View style={roundStyles.stateContainer}>
            <View style={[roundStyles.state, { backgroundColor: '#FF5757' }]} />
            <Text style={roundStyles.stateText}>현재 운행</Text>
          </View>
          <View style={roundStyles.stateContainer}>
            <View style={[roundStyles.state, { backgroundColor: '#38B6FF' }]} />
            <Text style={roundStyles.stateText}>운행 예정</Text>
          </View>
        </View>

        <View style={roundStyles.infoContainer}>
          <Text style={roundStyles.infoText}>
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

export default Round
