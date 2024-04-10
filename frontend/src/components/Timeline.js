import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const Timeline = ({ roundData }) => {
  const parseTime = (stopTime) => {
    const [hours, minutes] = stopTime.split(':')
    return {
      hours: parseInt(hours),
      minutes: parseInt(minutes),
    }
  }

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

  const isCurrent = (stopTime, nextStopTime) => {
    const currentTime = new Date()
    const { hours, minutes } = parseTime(stopTime)
    const stopDate = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      hours,
      minutes
    )
    if (!nextStopTime) {
      const nextMinutes = new Date(stopDate.getTime() + 60000) // Adds 1 minute to stop time
      return currentTime >= stopDate && currentTime < nextMinutes
    } else {
      const { hours: nextHours, minutes: nextMinutes } = parseTime(nextStopTime)
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

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.timelineContainer}>
        {roundData.map((stop, index) => (
          <View key={index} style={styles.stopContainer}>
            <View style={styles.lineAndCircle}>
              {index !== 0 && (
                <View
                  style={[
                    styles.verticalLine,
                    isCurrent(stop.time, roundData[index + 1]?.time)
                      ? styles.current
                      : isPast(stop.time)
                      ? styles.past
                      : styles.future,
                  ]}
                />
              )}
              <View
                style={[
                  styles.circle,
                  isCurrent(stop.time, roundData[index + 1]?.time)
                    ? styles.current
                    : isPast(stop.time)
                    ? styles.past
                    : styles.future,
                ]}
              />
              {index !== roundData.length - 1 && (
                <View
                  style={[
                    styles.verticalLine,
                    isCurrent(stop.time, roundData[index + 1]?.time)
                      ? styles.current
                      : isPast(stop.time)
                      ? styles.past
                      : styles.future,
                  ]}
                />
              )}
            </View>
            <View style={styles.stopDetails}>
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
  scrollViewContent: {
    paddingHorizontal: 20,
  },
  timelineContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  stopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineAndCircle: {
    alignItems: 'center',
    marginRight: 12, // 여백 증가
  },
  verticalLine: {
    width: 3, // 선 두께 증가
    backgroundColor: '#007AFF', // 기본 색상 유지
    flex: 1,
  },
  circle: {
    width: 12, // 원 크기 증가
    height: 12, // 원 크기 증가
    borderRadius: 6, // 반지름 조정
    backgroundColor: '#007AFF',
    marginBottom: 2,
  },
  stopDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stopTime: {
    marginTop: 15, // 여백 증가
    marginBottom: 10, // 여백 증가
    marginRight: 12, // 여백 증가
    fontWeight: '500', // 굵기 조정
    color: '#4A4A4A', // 색상 조정
  },
  stopName: {
    fontSize: 16,
    color: '#333', // 색상 조정
  },
  past: {
    backgroundColor: '#CCCCCC', // 과거 색상 조정
  },
  future: {
    backgroundColor: '#4CAF50', // 미래 색상 조정
  },
  pastText: {
    color: '#CCCCCC',
    fontWeight: '500',
  },
  futureText: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  current: {
    backgroundColor: '#FFCA28', // 현재 색상 조정
  },
  currentTime: {
    color: '#FFCA28',
    fontWeight: '500',
  },
})

export default Timeline
