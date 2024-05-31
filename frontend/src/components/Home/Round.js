import React, { useState, useEffect } from 'react'
import { View, Text, Vibration, Animated } from 'react-native'
import KNUBus_Timetable from '../../data/KNUBus_Timetable.json'
import Timeline from './Timeline'
import RoundControls from './RoundControls'
import MascotImage from './MascotImage'
import { roundStyles } from '../../styles/HomeStyles'
import { useAnimation } from '../../hooks/useAnimation'
import { getCurrentIndex } from '../../utils/timeUtils'

const Round = ({ isOperation }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const fadeAnim = useAnimation(0.5, 1, 600)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let index = getCurrentIndex(currentTime, KNUBus_Timetable)
    if (index === -1) index = 9
    setCurrentIndex(index)
  }, [currentTime])

  useEffect(() => {
    const initialIndex = getCurrentIndex(currentTime, KNUBus_Timetable)
    if (initialIndex !== -1) {
      setSelectedIndex(initialIndex)
    }
  }, [])

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

  if (!isOperation) {
    return <MascotImage />
  }

  const currentRound = KNUBus_Timetable.timetable[selectedIndex]
  const { round, tables } = currentRound

  return (
    <View style={roundStyles.container}>
      <View style={roundStyles.textContainer}>
        <Text style={roundStyles.roundText}>{round}</Text>
        <Text style={roundStyles.timeText}>
          {currentTime.toLocaleTimeString()}
        </Text>
      </View>
      <RoundControls
        selectedIndex={selectedIndex}
        currentIndex={currentIndex}
        goToPrevious={goToPrevious}
        goToNext={goToNext}
        goToNow={goToNow}
        fadeAnim={fadeAnim}
      />
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
