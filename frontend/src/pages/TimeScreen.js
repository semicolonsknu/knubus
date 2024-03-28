import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const TimeTablePage = () => {
  // Timetable data
  const timetableData = [
    {
      round: '1회차',
      times: [
        '8:30',
        '8:32',
        '8:34',
        '8:36',
        '8:38',
        '8:43',
        '8:45',
        '8:47',
        '8:49',
        '8:51',
        '8:53',
        '8:53',
      ],
    },
    {
      round: '2회차',
      times: [
        '9:30',
        '9:32',
        '9:34',
        '9:36',
        '9:38',
        '9:43',
        '9:45',
        '9:47',
        '9:49',
        '9:51',
        '9:53',
        '9:53',
      ],
    },
    // Add the rest of the rounds here...
    {
      round: '10회차',
      times: [
        '18:00',
        '18:02',
        '18:04',
        '18:06',
        '18:08',
        '18:13',
        '18:15',
        '18:17',
        '18:19',
        '18:21',
        '18:23',
        '18:23',
      ],
    },
  ]

  const stops = [
    '미래도서관',
    '동생대2호관',
    '경영대2호관',
    '미래광장',
    '백록관',
    '기숙사(회차)',
    '함인섭광장',
    '미래광장',
    '경영대광장',
    '경영대 2호관',
    '의생대',
    '미래도서관',
  ]

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>운행시간표</Text>
      <View style={styles.timetable}>
        {timetableData.map((round, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.round}>{round.round}</Text>
            {round.times.map((time, idx) => (
              <Text key={idx} style={styles.time}>
                {time}
              </Text>
            ))}
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        {stops.map((stop, index) => (
          <Text key={index} style={styles.stop}>
            {stop}
          </Text>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timetable: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  round: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  time: {
    marginRight: 8,
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  stop: {
    width: '33%',
    textAlign: 'center',
    marginBottom: 10,
  },
})

export default TimeTablePage
