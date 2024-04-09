import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import scheduleData from '../data/schedule.json'

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

const Round = ({ isOperationDay }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(currentIndex)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let index = getCurrentIndex()
    if (index === -1) index = 9
    setCurrentIndex(index)
  }, [currentTime])

  const currentRound = scheduleData.schedule[selectedIndex]
  const { round, tables } = currentRound

  const getCurrentIndex = () => {
    const currentHour = currentTime.getHours()
    const currentMinute = currentTime.getMinutes()

    for (let i = 0; i < scheduleData.schedule.length; i++) {
      const tables = scheduleData.schedule[i].tables

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
    setSelectedIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prevIndex) =>
      Math.min(scheduleData.schedule.length - 1, prevIndex + 1)
    )
  }

  const goToNow = () => {
    setSelectedIndex(currentIndex)
  }

  // 운행 안하면 --------------------------------------------------------------

  if (!isOperationDay) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/public/Mascot.png')}
          style={styles.image}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{currentTime.toLocaleTimeString()}</Text>
      <Text style={styles.heading}>{round}</Text>

      <View style={styles.buttonContainer}>
        {selectedIndex > 0 && (
          <TouchableOpacity onPress={goToPrevious} style={styles.button}>
            <Text style={styles.buttonText}>이전 회차</Text>
          </TouchableOpacity>
        )}
        {selectedIndex !== currentIndex && (
          <TouchableOpacity onPress={goToNow} style={styles.button}>
            <Text style={styles.buttonText}>현재로 돌아오기</Text>
          </TouchableOpacity>
        )}
        {selectedIndex < scheduleData.schedule.length - 1 && (
          <TouchableOpacity onPress={goToNext} style={styles.button}>
            <Text style={styles.buttonText}>다음 회차</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.container}>
        {/* 다른 코드 생략 */}
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
    backgroundColor: '#F5F5F5',
  },
  time: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333333', // Default color
  },
  heading: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#007AFF', // Apple blue color
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF', // Apple blue color
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333', // Default color
  },
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
  // Include other existing styles here
})

export default Round
