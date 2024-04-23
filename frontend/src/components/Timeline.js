import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

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
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {roundData.map((stop, index) => (
          <View key={index} style={styles.timelineContainer}>
            <View style={styles.timeline}>
              <Animated.View
                style={[
                  styles.circle,
                  isCurrent(stop.time, roundData[index + 1]?.time)
                    ? [styles.current, { opacity: fadeAnim }]
                    : isPast(stop.time)
                    ? styles.past
                    : styles.future,
                ]}
              />

              {index == roundData.length - 1 ? (
                <Animated.View style={[styles.circleBar]} />
              ) : (
                <Animated.View
                  style={[
                    styles.circleBar,
                    isCurrent(stop.time, roundData[index + 1]?.time)
                      ? [styles.current, { opacity: fadeAnim }]
                      : isPast(stop.time)
                      ? styles.past
                      : styles.future,
                  ]}
                />
              )}
            </View>

            <View style={styles.stopInfo}>
              <Text
                style={[
                  styles.stopTime,
                  isCurrent(stop.time, roundData[index + 1]?.time)
                    ? styles.currentTime
                    : isPast(stop.time)
                    ? styles.pastText
                    : styles.futureText,
                ]}
              >
                {stop.time}
              </Text>
              <Text style={styles.stopName}>{stop.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  // 컨테이너 --------------------------------------------------------------
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  // stop 컨테이너 --------------------------------------------------------------
  timelineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeline: {
    alignItems: 'center',
    marginRight: scale(13),
  },
  circleBar: {
    width: scale(3),
    flex: 1,
  },
  circle: {
    width: scale(12),
    height: scale(14),
    borderRadius: scale(10),
  },

  stopInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  stopTime: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginTop: scale(8),
    marginBottom: scale(2),
  },
  stopName: {
    fontSize: scale(15),
    fontWeight: 'normal',
    color: '#2c3e50',
    marginLeft: scale(10),
    marginBottom: scale(8),
  },

  // 색상 --------------------------------------------------------------
  past: {
    backgroundColor: '#B0BEC5',
  },
  current: {
    backgroundColor: '#FF5757',
  },
  future: {
    backgroundColor: '#38B6FF',
  },
  pastText: {
    color: '#B0BEC5',
    fontWeight: 'bold',
  },
  currentTime: {
    color: '#FF5757',
    fontWeight: 'bold',
  },
  futureText: {
    color: '#38B6FF',
    fontWeight: 'bold',
  },
})

export default Timeline
