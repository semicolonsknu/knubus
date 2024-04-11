import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Vibration,
  Animated,
} from 'react-native'
import operation from '../data/operation.json'
import Round from '../components/Round'

const HomeScreen = () => {
  // 선택한 날짜를 관리 --------------------------------------------------------------
  const [selectedDate, setSelectedDate] = useState(new Date())

  const formatOperation = (date) => {
    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)
    return `${year}-${month}-${day}`
  }

  const isOperation = operation.operations.includes(
    formatOperation(selectedDate)
  )

  // 버튼 --------------------------------------------------------------
  const goToPrevious = () => {
    Vibration.vibrate(100)
    let prevDay = new Date(selectedDate)
    prevDay.setDate(prevDay.getDate() - 1)
    setSelectedDate(prevDay)
  }

  const goToNext = () => {
    Vibration.vibrate(100)
    let nextDay = new Date(selectedDate)
    nextDay.setDate(nextDay.getDate() + 1)
    setSelectedDate(nextDay)
  }

  const goToNow = () => {
    Vibration.vibrate(300)
    setSelectedDate(new Date())
  }

  // 깜빡임 효과 --------------------------------------------------------------
  const [fadeAnim] = useState(new Animated.Value(0.5))

  useEffect(() => {
    let animation

    if (new Date().toDateString() !== selectedDate.toDateString()) {
      animation = Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.5,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      )
      animation.start()
    }

    return () => {
      if (animation) {
        animation.stop()
      }
    }
  }, [selectedDate, fadeAnim])

  // 휴일 정보 --------------------------------------------------------------
  const [holidays, setHolidays] = useState([])
  const [dateName, setDateName] = useState('')
  const [isHoliday, setIsHoliday] = useState('')

  const formatHoliday = (date) => {
    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    return { year, month }
  }

  useEffect(() => {
    const fetchHolidays = async () => {
      const { year, month } = formatHoliday(selectedDate)
      const serviceKey =
        'ZvYPMHcdP5th36amVoHJGtlGw7hwp%2B8HPSBiZJRe2OzO0t6Bh3iqj5UE15%2Fn5LBpkYYILdb3XQ4ElOFgMWha6A%3D%3D'

      const holidayUrl = `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?solYear=${year}&solMonth=${month}&ServiceKey=${serviceKey}&_type=json`
      const anniversaryUrl = `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getAnniversaryInfo?solYear=${year}&solMonth=${month}&ServiceKey=${serviceKey}&_type=json`

      try {
        const responses = await Promise.all([
          fetch(holidayUrl),
          fetch(anniversaryUrl),
        ])
        const data = await Promise.all(
          responses.map((response) => response.json())
        )

        const holidays = data[0].response.body.items?.item
        const anniversaries = data[1].response.body.items?.item

        const combinedItems = [
          ...(Array.isArray(holidays) ? holidays : holidays ? [holidays] : []),
          ...(Array.isArray(anniversaries)
            ? anniversaries
            : anniversaries
            ? [anniversaries]
            : []),
        ]

        setHolidays(combinedItems)
      } catch (error) {
        console.error('Failed to fetch holidays and anniversaries', error)
      }
    }
    fetchHolidays()
  }, [selectedDate])

  useEffect(() => {
    const checkHoliday = () => {
      const formatDate = selectedDate
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '')

      const holiday = holidays.find((holiday) => holiday.locdate == formatDate)
      setDateName(holiday ? holiday.dateName : '')
      setIsHoliday(holiday ? holiday.isHoliday : '')

      if (formatDate == 20240614) {
        setDateName('개교개념일')
        setIsHoliday('Y')
      }
      if (formatDate == 19990730) {
        setDateName('윤수생일')
      }
    }

    checkHoliday()
  }, [selectedDate, holidays])

  // 요일 계산 --------------------------------------------------------------
  const formatDate = (date) => {
    const weekDays = ['일', '월', '화', '수', '목', '금', '토']
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const weekDay = weekDays[date.getDay()]

    return `${year}년 ${month}월 ${day}일 (${weekDay})`
  }

  const textColor = () => {
    const weekDay = selectedDate.getDay()
    return weekDay === 6
      ? styles.blueText
      : weekDay === 0 || isHoliday == 'Y'
      ? styles.redText
      : styles.defaultText
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.dateText, textColor()]}>
        {formatDate(selectedDate)}
      </Text>
      {dateName ? (
        <Text style={[styles.dateNameText, textColor()]}>{dateName}</Text>
      ) : (
        ''
      )}

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={goToPrevious}>
          <Text style={styles.buttonText}>이전 날짜</Text>
        </Pressable>

        {new Date().toDateString() !== selectedDate.toDateString() && (
          <Animated.View style={[styles.buttonTo, { opacity: fadeAnim }]}>
            <Pressable onPress={goToNow}>
              <Text style={styles.buttonText}>오늘 날짜로</Text>
            </Pressable>
          </Animated.View>
        )}

        <Pressable style={styles.button} onPress={goToNext}>
          <Text style={styles.buttonText}>다음 날짜</Text>
        </Pressable>
      </View>
      <View style={styles.roundContainer}>
        <Round isOperation={isOperation} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // 컨테이너 --------------------------------------------------------------
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    color: '#4A4A4A',
  },
  dateNameText: {
    fontSize: 23,
    fontWeight: '700',
    color: '#4A4A4A',
  },

  // 버튼 --------------------------------------------------------------
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 5,
    marginRight: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonTo: {
    backgroundColor: '#50E3C2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 5,
    marginRight: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // 색상 --------------------------------------------------------------
  blueText: {
    color: '#4A90E2',
  },
  redText: {
    color: '#FF2D55',
  },
  grayText: {
    color: '#808080',
  },
  defaultText: {
    color: '#4A4A4A',
  },

  // roundContainer --------------------------------------------------------------
  roundContainer: {
    flex: 1,
    marginTop: 10,
    width: '100%',
  },
})

export default HomeScreen
