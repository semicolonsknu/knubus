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
    marginBottom: 10,
  },
  lineAndCircle: {
    alignItems: 'center',
    marginRight: 10,
  },
  verticalLine: {
    width: 2,
    backgroundColor: '#007AFF',
    flex: 1,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    marginBottom: 2,
  },
  stopDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stopTime: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  stopName: {
    fontSize: 16,
  },
  past: {
    backgroundColor: '#808080',
  },
  future: {
    backgroundColor: '#39FF14',
  },
  pastText: {
    color: '#808080',
    fontWeight: 'bold',
  },
  futureText: {
    color: '#39FF14',
    fontWeight: 'bold',
  },
  current: {
    backgroundColor: '#FFD700', // Gold color for current time
  },
  currentTime: {
    color: '#FFD700', // Gold color for current time text
    fontWeight: 'bold',
  },
})

export default Timeline
