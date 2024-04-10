import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import operationDates from '../data/operation.json'
import Round from '../components/Round'

const HomeScreen = () => {
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

  // 버튼 --------------------------------------------------------------

  const goToPrevious = () => {
    let prevDay = new Date(selectedDate)
    prevDay.setDate(prevDay.getDate() - 1)
    setSelectedDate(prevDay)
  }

  const goToNext = () => {
    let nextDay = new Date(selectedDate)
    nextDay.setDate(nextDay.getDate() + 1)
    setSelectedDate(nextDay)
  }

  const goToNow = () => {
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
        <Pressable style={styles.button} onPress={goToPrevious}>
          <Text style={styles.buttonText}>이전 날짜</Text>
        </Pressable>
        {formatDate(new Date()) !== formatDate(selectedDate) && (
          <Pressable style={styles.buttonToToday} onPress={goToNow}>
            <Text style={styles.buttonText}>오늘 날짜로</Text>
          </Pressable>
        )}
        <Pressable style={styles.button} onPress={goToNext}>
          <Text style={styles.buttonText}>다음 날짜</Text>
        </Pressable>
      </View>
      <View style={styles.roundContainer}>
        <Round isOperationDay={isOperationDay} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // 모던한 배경색으로 수정
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF', // Apple blue color
  },
  operationText: {
    fontSize: 28,
    marginBottom: 20,
    color: '#333333', // Default color
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007AFF', // Apple blue color
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonToToday: {
    backgroundColor: '#007AFF', // Apple blue color
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold', // 폰트 굵기 추가
  },
  blueText: {
    color: '#007AFF', // Apple blue color
  },
  redText: {
    color: '#FF3B30', // Apple red color
  },
  defaultText: {
    color: '#333333', // Default color
  },
  roundContainer: {
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
})

export default HomeScreen
