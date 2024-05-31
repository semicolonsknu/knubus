import { useState, useEffect } from 'react'
import { Vibration } from 'react-native'
import KNUBus_Timetable from '../data/KNUBus_Timetable.json'
import { useAnimation } from '../hooks/useAnimation'
import { getCurrentIndex } from '../utils/timeUtils'

export const useRound = () => {
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
    const updateCurrentIndex = () => {
      const index = getCurrentIndex(currentTime, KNUBus_Timetable)
      setCurrentIndex(index === -1 ? 9 : index)
    }
    updateCurrentIndex()
  }, [currentTime])

  useEffect(() => {
    let index = getCurrentIndex(currentTime, KNUBus_Timetable)
    if (index === -1) index = 9
    setCurrentIndex(index)
  }, [currentTime])

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

  return {
    currentTime,
    currentIndex,
    selectedIndex,
    fadeAnim,
    goToPrevious,
    goToNext,
    goToNow,
  }
}
