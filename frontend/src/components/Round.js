import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import scheduleData from '../data/schedule.json'
import Timeline from './Timeline'

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

  const currentRound = scheduleData.schedule[selectedIndex]
  const { round, tables } = currentRound

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
    backgroundColor: '#FAFAFA', // 밝은 회색으로 배경색 변경
    padding: 20,
  },
  time: {
    fontSize: 24, // 글자 크기 증가
    marginBottom: 12, // 여백 조정
    color: '#333333', // 강한 대비를 위한 색상 변경
  },
  heading: {
    fontSize: 28, // 제목 글자 크기 증가
    marginBottom: 24, // 여백 증가
    fontWeight: '600', // 중간 굵기로 변경
    color: '#1B95E0', // 보다 밝은 파란색으로 변경
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1B95E0', // 버튼 색상 변경
    borderRadius: 12, // 둥근 모서리 더 강조
    paddingVertical: 10, // 패딩 조정
    paddingHorizontal: 18, // 패딩 조정
    marginHorizontal: 8, // 마진 조정
    elevation: 3, // 그림자 효과 약간 감소
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // 그림자 불투명도 감소
    shadowRadius: 2, // 그림자 반경 감소
  },
  buttonText: {
    color: '#FFFFFF', // 버튼 내 텍스트 색상
    fontSize: 18, // 글자 크기 증가
    fontWeight: '500', // 중간 굵기로 변경
  },
  image: {
    width: 220, // 이미지 크기 조정
    height: 220, // 이미지 크기 조정
    borderRadius: 110, // 이미지 둥근 모서리 처리
    overflow: 'hidden', // 이미지 둥근 처리에 맞게 조정
  },
})

export default Round
