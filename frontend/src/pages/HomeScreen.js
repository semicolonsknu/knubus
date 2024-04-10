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
    backgroundColor: '#F5F5F5', // 부드러운 회색으로 모던한 배경
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  dateText: {
    fontSize: 22, // 조금 더 섬세한 크기 조정
    fontWeight: '500', // 중간 굵기로 조정
    marginBottom: 20,
    color: '#333', // 모던한 다크 그레이
  },
  operationText: {
    fontSize: 24, // 크기 조정
    marginBottom: 20,
    color: '#4A4A4A', // 조금 더 짙은 그레이
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4A90E2', // 밝은 파란색으로 변경
    borderRadius: 20, // 둥근 모서리 더욱 강조
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    elevation: 2, // 더 세밀한 그림자 효과
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonToToday: {
    backgroundColor: '#50E3C2', // 모던한 민트색으로 변경
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16, // 적당한 크기 조정
    fontWeight: 'bold',
  },
  blueText: {
    color: '#4A90E2',
  },
  redText: {
    color: '#FF2D55', // 더 선명한 빨간색으로 변경
  },
  defaultText: {
    color: '#4A4A4A',
  },
  roundContainer: {
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
})

export default HomeScreen
