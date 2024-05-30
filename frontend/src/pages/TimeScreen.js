import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import KNUBus_Timetable from '../data/KNUBus_Timetable.json'
import { Row, RenderHead } from '../components/Render'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

const widthArr = [65, 65, 65, 80, 80, 65, 65, 80, 75, 65, 80, 60, 65]

const { timetable } = KNUBus_Timetable

const TimeScreen = () => {
  const totalWidth = widthArr.reduce((acc, cur) => acc + cur, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>운행 시간표</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.tableContainer, { minWidth: totalWidth }]}>
          <RenderHead timetable={timetable} widthArr={widthArr} />
          {timetable.map((round, index) => (
            <Row key={index} round={round} index={index} widthArr={widthArr} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: scale(15),
    paddingVertical: scale(20),
  },
  header: {
    fontSize: scale(20),
    fontWeight: '600',
    marginBottom: scale(10),
    color: '#2c3e50',
  },
  tableContainer: {
    flex: 1,
    marginTop: scale(10),
    paddingHorizontal: scale(20),
    width: '100%',
    overflow: 'hidden',
    borderRadius: scale(8),
  },
})

export default TimeScreen
