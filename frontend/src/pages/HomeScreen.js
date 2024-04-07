import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import operationDates from '../data/operation.json'
import Round from '../components/Round'

const HomeScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const formatDate = (date) => {
    const weekDays = ['일', '월', '화', '수', '목', '금', '토']
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const weekDay = weekDays[date.getDay()]

    return `${year}년 ${month}월 ${day}일 (${weekDay})`
  }

  const dateTextColor = () => {
    const weekDay = selectedDate.getDay()
    return weekDay === 6
      ? styles.blueText
      : weekDay === 0
      ? styles.redText
      : styles.defaultText
  }

  const formatOperation = (date) => {
    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)
    return `${year}-${month}-${day}`
  }

  const isOperationDay = operationDates.operations.includes(
    formatOperation(selectedDate)
  )

  const goToPreviousDay = () => {
    let prevDay = new Date(selectedDate)
    prevDay.setDate(prevDay.getDate() - 1)
    setSelectedDate(prevDay)
  }

  const goToNextDay = () => {
    let nextDay = new Date(selectedDate)
    nextDay.setDate(nextDay.getDate() + 1)
    setSelectedDate(nextDay)
  }

  const goToToday = () => {
    setSelectedDate(new Date())
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.dateText, dateTextColor()]}>
        {formatDate(selectedDate)}
      </Text>
      <Text style={styles.operationText}>
        {isOperationDay ? '🚌 운행합니다. 🚌' : '운행하지 않습니다.'}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToPreviousDay}>
          <Text style={styles.buttonText}>이전 날짜</Text>
        </TouchableOpacity>
        {formatDate(currentDate) !== formatDate(selectedDate) && (
          <TouchableOpacity style={styles.buttonToToday} onPress={goToToday}>
            <Text style={styles.buttonText}>오늘 날짜로</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={goToNextDay}>
          <Text style={styles.buttonText}>다음 날짜</Text>
        </TouchableOpacity>
      </View>
      <Round isOperationDay={isOperationDay} />
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
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  operationText: {
    fontSize: 25,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0047bb',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonToToday: {
    backgroundColor: '#0f3c87',
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
  blueText: {
    color: '#007BFF',
  },
  redText: {
    color: '#FF4136',
  },
  defaultText: {
    color: '#333333',
  },
})

export default HomeScreen
