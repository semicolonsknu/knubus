import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

// Assuming Holiday.js and Round.js are adjusted to accept props for date and round navigation
import Holiday from '../components/Holiday'
import Round from '../components/Round'

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Advance or rewind the date
  const changeDate = (days) => {
    setSelectedDate(
      new Date(selectedDate.setDate(selectedDate.getDate() + days))
    )
  }

  // Display the current time
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  )
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>Current Time: {currentTime}</Text>
      <View style={styles.dateNavigation}>
        <Button title="Previous" onPress={() => changeDate(-1)} />
        <Text style={styles.selectedDate}>{selectedDate.toDateString()}</Text>
        <Button title="Next" onPress={() => changeDate(1)} />
      </View>
      <Holiday date={selectedDate} />
      <Round date={selectedDate} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 18,
    marginBottom: 20,
  },
  dateNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedDate: {
    marginHorizontal: 10,
    fontSize: 18,
  },
})

export default HomeScreen
