import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Holiday = ({ date }) => {
  // 주어진 날짜(date)가 휴일인지 확인하는 함수
  const isHoliday = (date) => {
    const holidaySchedule = {
      '3월': [1, 2, 3, 9, 10, 16, 17, 23, 24, 30, 31],
      '4월': [6, 7, 10, 13, 14, 20, 21, 27, 28],
      '5월': [1, 4, 5, 6, 11, 12, 15, 18, 19, 25, 26],
      '6월': [1, 2, 6, 8, 9, 14, 15, 16, 22, 23],
    }

    const month = date.getMonth() + 1 // getMonth() returns month from 0-11
    const day = date.getDate()

    return holidaySchedule[`${month}월`]?.includes(day)
  }

  return (
    <View style={styles.container}>
      {isHoliday(date) ? (
        <Text style={styles.holidayText}>휴일</Text>
      ) : (
        <Text>휴일이 아닙니다</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  holidayText: {
    color: 'red', // 휴일일 경우 빨간색으로 표시
    fontWeight: 'bold',
  },
})

export default Holiday
