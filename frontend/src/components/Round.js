import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

// 1회차: 운영 예정[0:0 ~ 8:29] / 운영 중[8:30 ~ 8:53]
// 2회차: 운영 예정[8:54 ~ 9:29] / 운영 중[9:30 ~ 9:53]
// 3회차: 운영 예정[9:54 ~ 9:59] / 운영 중[10:00 ~ 10:23]
// 4회차: 운영 예정[10:24 ~ 11:29] / 운영 중[11:30 ~ 11:53]
// 5회차: 운영 예정[11:54] ~ [11:59] / 운영 중[12:00 ~ 12:23]
// 6회차: 운영 예정[12:24 ~ 12:59] / 운영 중[13:00 ~ 13:23]
// 7회차: 운영 예정[13:24 ~ 14:29] / 운영 중[14:30 ~ 14:53]
// 8회차: 운영 예정[14:54 ~ 13:59] / 운영 중16:00 ~ 16:23]
// 9회차: 운영 예정[14:24 ~ 16:29] / 운영 중[17:30 ~ 17:53]
// 10회차: 운영 예정[17:54 ~ 17:59] / 운영 중[18:00 ~ 18:23]
const roundTable = [
  {
    id: 1,
    scheduledStart: '0:0',
    scheduledEnd: '8:29',
    operationStart: '8:30',
    operationEnd: '8:53',
  },
  {
    id: 2,
    scheduledStart: '8:54',
    scheduledEnd: '9:29',
    operationStart: '9:30',
    operationEnd: '9:53',
  },
]

const Round = ({ date }) => {
  const [currentRound, setCurrentRound] = useState(null)
  const [status, setStatus] = useState('')

  const checkCurrentRound = () => {
    const currentTime =
      date.getHours() + ':' + date.getMinutes().toString().padStart(2, '0')

    const foundRound = roundTable.find(
      (round) =>
        (currentTime >= round.scheduledStart &&
          currentTime <= round.scheduledEnd) ||
        (currentTime >= round.operationStart &&
          currentTime <= round.operationEnd)
    )

    if (foundRound) {
      if (
        currentTime >= foundRound.scheduledStart &&
        currentTime <= foundRound.scheduledEnd
      ) {
        setStatus('운행 예정')
      } else {
        setStatus('운행 중')
      }
      setCurrentRound(foundRound.id)
    } else {
      setStatus('운행 정보 없음')
    }
  }

  useEffect(() => {
    checkCurrentRound()
  }, [date])

  return (
    <View style={styles.container}>
      {currentRound ? (
        <Text>
          {currentRound}회차: {status} [
          {roundTable[currentRound - 1].scheduledStart} ~{' '}
          {roundTable[currentRound - 1].scheduledEnd}] / 운행 중[
          {roundTable[currentRound - 1].operationStart} ~{' '}
          {roundTable[currentRound - 1].operationEnd}]
        </Text>
      ) : (
        <Text>{status}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
})

export default Round
