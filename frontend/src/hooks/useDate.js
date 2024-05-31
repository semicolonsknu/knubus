// useDate.js
import { useState, useEffect } from 'react'
import { Vibration } from 'react-native'
import { dateApiKey } from '../data/apiKey'
import { formatYMD, getYearMonth } from '../utils/dateUtils'
import KNUBus_Schedule from '../data/KNUBus_Schedule.json'
import KNU_Event from '../data/KNU_Event.json'
import { homeScreenStyles } from '../styles/homeScreenStyles'
import { useAnimation } from './useAnimation'

export const useDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const fadeAnim = useAnimation(0.5, 1, 600)
  const [holidays, setHolidays] = useState([])
  const [dateName, setDateName] = useState('')
  const [isHoliday, setIsHoliday] = useState('N')
  const [isKNU, setIsKNU] = useState('N')

  const isOperation = KNUBus_Schedule.schedule.operating.includes(
    formatYMD(selectedDate)
  )

  const goToPrevious = () => {
    Vibration.vibrate(100)
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setDate(newDate.getDate() - 1)
      return newDate
    })
  }

  const goToNext = () => {
    Vibration.vibrate(100)
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setDate(newDate.getDate() + 1)
      return newDate
    })
  }

  const goToNow = () => {
    Vibration.vibrate(300)
    setSelectedDate(new Date())
  }

  useEffect(() => {
    const fetchHolidays = async () => {
      const { year, month } = getYearMonth(selectedDate)
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
      ? homeScreenStyles.blueText
      : weekDay === 0 || isHoliday == 'Y'
      ? homeScreenStyles.redText
      : homeScreenStyles.grayText
  }

  const textColor = () => {
    if (isHoliday === 'Y') {
      return homeScreenStyles.redText
    } else if (isKNU === 'Y') {
      return homeScreenStyles.knuText
    } else {
      return homeScreenStyles.grayText
    }
  }

  return {
    selectedDate,
    fadeAnim,
    dateName,
    isHoliday,
    isKNU,
    goToPrevious,
    goToNext,
    goToNow,
    dateColor,
    textColor,
    isOperation,
  }
}
