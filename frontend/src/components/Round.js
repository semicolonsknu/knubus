import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import scheduleData from '../data/schedule.json'

const Round = ({ isOperationDay }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Function to determine the index of the current round based on current time
  const getCurrentRoundIndex = () => {
    const currentHour = currentTime.getHours()
    const currentMinute = currentTime.getMinutes()

    for (let i = 0; i < scheduleData.schedule.length; i++) {
      const { '운행 중': operationOngoing } = scheduleData.schedule[i]

      if (operationOngoing) {
        const [startHour, startMinute] = operationOngoing.start
          .split(':')
          .map(Number)
        const [endHour, endMinute] = operationOngoing.end.split(':').map(Number)

        if (
          (currentHour > startHour ||
            (currentHour === startHour && currentMinute >= startMinute)) &&
          (currentHour < endHour ||
            (currentHour === endHour && currentMinute <= endMinute))
        ) {
          return i
        }
      }
    }

    return -1 // No round is currently active
  }

  useEffect(() => {
    const roundIndex = getCurrentRoundIndex()
    if (roundIndex !== -1) {
      setCurrentRoundIndex(roundIndex)
    }
  }, [currentTime])

  const handlePreviousRound = () => {
    setCurrentRoundIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const handleNextRound = () => {
    setCurrentRoundIndex((prevIndex) =>
      Math.min(scheduleData.schedule.length - 1, prevIndex + 1)
    )
  }

  const handleReturnToCurrentRound = () => {
    const roundIndex = getCurrentRoundIndex()
    if (roundIndex !== -1) {
      setCurrentRoundIndex(roundIndex)
    }
  }

  if (!isOperationDay) {
    return (
      <View>
        <Image source={require('../../assets/public/Mascot.png')} />
      </View>
    )
  }

  const currentRound = scheduleData.schedule[currentRoundIndex]
  const {
    round,
    '운행 예정': operationScheduled,
    '운행 중': operationOngoing,
    times,
  } = currentRound

  return (
    <View>
      <Text>Current Round: {round}</Text>
      {operationScheduled && (
        <Text>
          Operation Scheduled: {operationScheduled.start} -{' '}
          {operationScheduled.end}
        </Text>
      )}
      {operationOngoing && (
        <Text>
          Operation Ongoing: {operationOngoing.start} - {operationOngoing.end}
        </Text>
      )}
      {/* Display arrival times for each stop */}
      {Object.entries(times).map(([stop, time]) => (
        <Text key={stop}>
          {stop}: {time}
        </Text>
      ))}
      {/* Navigation buttons */}
      <View>
        <TouchableOpacity onPress={handlePreviousRound}>
          <Text>Previous Round</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextRound}>
          <Text>Next Round</Text>
        </TouchableOpacity>
        {currentRoundIndex !== getCurrentRoundIndex() && (
          <TouchableOpacity onPress={handleReturnToCurrentRound}>
            <Text>Return to Current Round</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default Round
