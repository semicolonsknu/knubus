import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
      // If there's no next stop time, revert to the original logic
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
      // Now checks if current time is before the next stop's time
      return currentTime >= stopDate && currentTime < nextStopDate
    }
  }

  return (
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
  )
}

const styles = StyleSheet.create({
  timelineContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
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
    backgroundColor: '#000',
    flex: 1, // Take up available space
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginBottom: 2, // Spacing between circle and line
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
    backgroundColor: '#808080', // Gray for past times
  },
  future: {
    backgroundColor: '#39FF14', // Fluorescent green for future times
  },
  pastText: {
    color: '#808080', // Gray text for past times
    fontWeight: 'bold',
  },
  futureText: {
    color: '#39FF14', // Fluorescent green text for future times
    fontWeight: 'bold',
  },
})

export default Timeline
