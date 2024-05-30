import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native'

import { timelineStyles } from '../../styles/HomeStyles'

const Timeline = ({ roundData }) => {
  // 시간 파싱 --------------------------------------------------------------
  const parseTime = (stopTime) => {
    const [hours, minutes] = stopTime.split(':')
    return {
      hours: parseInt(hours, 10),
      minutes: parseInt(minutes, 10),
    }
  }

  // 과거 여부 확인 --------------------------------------------------------------
  const isPast = (stopTime) => {
    const currentTime = new Date()
    const { hours, minutes } = parseTime(stopTime)
    const stopDate = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      hours,
      minutes
    )
    return currentTime > stopDate
  }

  // 현재 여부 확인 --------------------------------------------------------------
  const isCurrent = (stopTime, nextTime) => {
    const currentTime = new Date()
    const { hours, minutes } = parseTime(stopTime)
    const stopDate = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      hours,
      minutes
    )
    if (!nextTime) {
      const nextMinutes = new Date(stopDate.getTime() + 60000)
      return currentTime >= stopDate && currentTime < nextMinutes
    } else {
      const { hours: nextHours, minutes: nextMinutes } = parseTime(nextTime)
      const nextStopDate = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        nextHours,
        nextMinutes
      )
      return currentTime >= stopDate && currentTime < nextStopDate
    }
  }

  // 깜빡임 효과 --------------------------------------------------------------
  const [fadeAnim] = useState(new Animated.Value(0.2))

  useEffect(() => {
    let animation

    const startAnimation = () => {
      animation = Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.2,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      )
      animation.start()
    }

    startAnimation()

    const interval = setInterval(() => {
      startAnimation()
    }, 1000)

    return () => {
      clearInterval(interval)
      if (animation) {
        animation.stop()
      }
    }
  }, [fadeAnim])

  // 움직임 효과 --------------------------------------------------------------

  return (
    <ScrollView contentContainerStyle={timelineStyles.scrollViewContainer}>
      <View style={timelineStyles.container}>
        {roundData.map((stop, index) => (
          <View key={index} style={timelineStyles.timelineContainer}>
            <View style={timelineStyles.timeline}>
              <Animated.View
                style={[
                  timelineStyles.circle,
                  isCurrent(stop.time, roundData[index + 1]?.time)
                    ? [timelineStyles.current, { opacity: fadeAnim }]
                    : isPast(stop.time)
                    ? timelineStyles.past
                    : timelineStyles.future,
                ]}
              />

              {index == roundData.length - 1 ? (
                <Animated.View style={[timelineStyles.circleBar]} />
              ) : (
                <Animated.View
                  style={[
                    timelineStyles.circleBar,
                    isCurrent(stop.time, roundData[index + 1]?.time)
                      ? [timelineStyles.current, { opacity: fadeAnim }]
                      : isPast(stop.time)
                      ? timelineStyles.past
                      : timelineStyles.future,
                  ]}
                />
              )}
            </View>

            <View style={timelineStyles.stopInfo}>
              <Text
                style={[
                  timelineStyles.stopTime,
                  isCurrent(stop.time, roundData[index + 1]?.time)
                    ? timelineStyles.currentTime
                    : isPast(stop.time)
                    ? timelineStyles.pastText
                    : timelineStyles.futureText,
                ]}
              >
                {stop.time}
              </Text>
              <Text style={timelineStyles.stopName}>{stop.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default Timeline
