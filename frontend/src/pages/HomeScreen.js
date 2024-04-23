import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Vibration,
  Animated,
  Dimensions,
} from 'react-native'
import operation from '../data/operation.json'
import { dateApiKey } from '../data/apiKey'
import Round from '../components/Round'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

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
      const serviceKey = dateApiKey

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

      if (formatDate == 19990730) {
        setDateName('윤수생일')
      }
      if (formatDate == 20240304) {
        setDateName('1학기 개강')
      }
      if (
        formatDate == 20240306 ||
        formatDate == 20240307 ||
        formatDate == 20240308
      ) {
        setDateName('1학기 수강신청 변경')
      }
      if (formatDate == 20240405) {
        setDateName('수업일수 1/3선')
      }
      if (
        formatDate == 20240415 ||
        formatDate == 20240416 ||
        formatDate == 20240417 ||
        formatDate == 20240418 ||
        formatDate == 20240419
      ) {
        setDateName('1학기 중간 수업평가')
      }
      if (formatDate == 20240425) {
        setDateName('수업일수 1/2선')
      }
      if (
        formatDate == 20240508 ||
        formatDate == 20240509 ||
        formatDate == 20240510
      ) {
        setDateName('계절학기 수강신청')
      }
      if (formatDate == 20240513) {
        setDateName('1학기 부·복수전공 이수신청')
      }
      if (
        formatDate == 20240521 ||
        formatDate == 20240522 ||
        formatDate == 20240523
      ) {
        setDateName('계절학기 수강료 납부')
      }
      if (formatDate == 20240610) {
        setDateName('1학기 기말 수업평가')
      }
      if (formatDate == 20240614) {
        setDateName('개교개념일')
        setIsHoliday('Y')
      }
      if (formatDate == 20240617) {
        setDateName('강의보충기간(5/6, 어린이날)')
      }
      if (formatDate == 20240618) {
        setDateName('강의보충기간(5/1, 근로자의날)')
      }
      if (formatDate == 20240619) {
        setDateName('강의보충기간(4/10, 제22대 국회의원 선거)')
      }
      if (formatDate == 20240620) {
        setDateName('강의보충기간(6/6, 현충일)')
      }
      if (formatDate == 20240621) {
        setDateName('강의보충기간(6/14, 개교기념일)')
      }
      if (formatDate == 20240624) {
        setDateName('💙종강💙 순환버스는 떠납니다...⭐')
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

  const dateColor = () => {
    const weekDay = selectedDate.getDay()
    return weekDay === 6
      ? styles.blueText
      : weekDay === 0 || isHoliday == 'Y'
      ? styles.redText
      : styles.defaultText
  }

  const textColor = () => {
    const weekDay = selectedDate.getDay()
    return isHoliday == 'Y' ? styles.redText : styles.defaultText
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.dateText, dateColor()]}>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: scale(25),
    paddingVertical: scale(18),
  },
  dateText: {
    fontSize: scale(16),
    fontWeight: '500',
    marginBottom: scale(4),
    color: '#2c3e50',
  },
  dateNameText: {
    fontSize: scale(17),
    fontWeight: '700',
    color: '#2c3e50',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: scale(10),
    marginBottom: scale(5),
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: scale(20),
    paddingVertical: scale(7),
    paddingHorizontal: scale(15),
    marginLeft: scale(4),
    marginRight: scale(4),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(2),
  },
  buttonTo: {
    backgroundColor: '#50E3C2',
    borderRadius: scale(20),
    paddingVertical: scale(7),
    paddingHorizontal: scale(15),
    marginLeft: scale(4),
    marginRight: scale(4),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(2),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scale(12),
    fontWeight: 'bold',
  },
  blueText: {
    color: '#38B6FF',
  },
  redText: {
    color: '#FF5757',
  },
  grayText: {
    color: '#B0BEC5',
  },
  defaultText: {
    color: '#2c3e50',
  },
  roundContainer: {
    flex: 1,
    marginTop: scale(10),
    width: '100%',
  },
})

export default HomeScreen
