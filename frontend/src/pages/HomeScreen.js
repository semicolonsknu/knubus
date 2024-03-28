import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import Round from '../components/Round'

const isHoliday = (date) => {
  const holidays = {
    3: [1, 2, 3, 9, 10, 16, 17, 23, 24, 30, 31],
    4: [6, 7, 10, 13, 14, 20, 21, 27, 28],
    5: [1, 4, 5, 6, 11, 12, 15, 18, 19, 25, 26],
    6: [1, 2, 6, 8, 9, 14, 15, 16, 22, 23],
  }
  const [month, day] = date.split('/')
  return holidays[month] && holidays[month].includes(parseInt(day))
}

const HomeScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const moveToPreviousDay = () => {
    const previousDate = new Date(currentDate)
    previousDate.setDate(previousDate.getDate() - 1)
    setCurrentDate(previousDate)
  }

  const moveToNextDay = () => {
    const nextDate = new Date(currentDate)
    nextDate.setDate(nextDate.getDate() + 1)
    setCurrentDate(nextDate)
  }

  const moveToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <View>
      <Text>Current Date: {currentDate.toDateString()}</Text>
      <Text>
        {isHoliday(`${currentDate.getMonth() + 1}/${currentDate.getDate()}`)
          ? '운행 휴일'
          : '정상 운행'}
      </Text>
      <Button title="이전" onPress={moveToPreviousDay} />
      <Button title="다음" onPress={moveToNextDay} />
      <Button title="오늘 날짜로 이동" onPress={moveToToday} />
      <Round currentDate={currentDate} isHoliday={isHoliday} />
    </View>
  )
}

export default HomeScreen
