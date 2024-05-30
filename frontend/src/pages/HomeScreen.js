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
import { dateApiKey } from '../data/apiKey'
import { formatOperation, formatHoliday, formatDate } from '../utils/dateUtils'
import KNUBus_Schedule from '../data/KNUBus_Schedule.json'
import KNU_Event from '../data/KNU_Event.json'
import Round from '../components/Round'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const isOperation = KNUBus_Schedule.schedule.operating.includes(
    formatOperation(selectedDate)
  )

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

  const [holidays, setHolidays] = useState([])
  const [dateName, setDateName] = useState('')
  const [isHoliday, setIsHoliday] = useState('N')
  const [isKNU, setIsKNU] = useState('N')

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
      // Create a new date and adjust to Korean Standard Time
      let newDate = new Date(selectedDate.getTime() + 9 * 60 * 60 * 1000) // KST is UTC+9

      const formattedDate = newDate
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '')

      const holiday = holidays.find(
        (holiday) => holiday.locdate == formattedDate
      )
      setDateName(holiday ? holiday.dateName : '')
      setIsHoliday(holiday ? holiday.isHoliday : '')

      const event = KNU_Event.event.find(
        (event) => event.date && event.date.replace(/-/g, '') === formattedDate
      )
      if (event) {
        setDateName(event.name)
        setIsHoliday(event.holiday ? 'Y' : '')
        setIsKNU('Y')
      } else {
        setIsKNU('N')
      }
    }
    checkHoliday()
  }, [selectedDate, holidays])

  const dateColor = () => {
    const weekDay = selectedDate.getDay()
    return weekDay === 6
      ? styles.blueText
      : weekDay === 0 || isHoliday == 'Y'
      ? styles.redText
      : styles.grayText
  }

  const textColor = () => {
    if (isHoliday === 'Y') {
      return styles.redText
    } else if (isKNU === 'Y') {
      return styles.knuText
    } else {
      return styles.grayText
    }
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
  },
  dateNameText: {
    fontSize: scale(17),
    fontWeight: '700',
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
  knuText: {
    color: '#2c3e50',
  },
  roundContainer: {
    flex: 1,
    marginTop: scale(10),
    width: '100%',
  },
})

export default HomeScreen
