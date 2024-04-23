import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import scheduleData from '../data/schedule.json'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

// 고정된 헤더 너비 배열
const widthArr = [70, 80, 80, 85, 85, 85, 85, 85, 85, 85, 85, 75, 85]

// 데이터 및 구성 요소
const { schedule } = scheduleData

// 각 라운드의 테이블 헤더를 렌더링
const RenderHead = () => (
  <View style={styles.head}>
    {['구분', ...Object.keys(schedule[0].tables)].map((header, index) => (
      <Text key={index} style={[styles.headText, { width: widthArr[index] }]}>
        {header}
      </Text>
    ))}
  </View>
)

// 각 라운드의 행을 렌더링
const RenderRows = () => (
  <>
    {schedule.map((round, index) => (
      <Row key={index} round={round} index={index} />
    ))}
  </>
)

// 개별 행 컴포넌트
const Row = ({ round, index }) => {
  const handlePress = () => {
    console.log('Row pressed', round.round)
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress}>
      <View
        style={[
          styles.row,
          { backgroundColor: index % 2 ? '#f4f4f8' : 'white' },
        ]}
      >
        {[round.round, ...Object.values(round.tables)].map(
          (cell, cellIndex) => (
            <Text
              key={cellIndex}
              style={[styles.tableText, { width: widthArr[cellIndex] }]}
            >
              {cell}
            </Text>
          )
        )}
      </View>
    </TouchableOpacity>
  )
}

// 메인 컴포넌트
const TimeScreen = () => {
  const totalWidth = widthArr.reduce((acc, cur) => acc + cur, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>운행 시간표</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.tableContainer, { minWidth: totalWidth }]}>
          <RenderHead />
          <RenderRows />
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
    fontSize: scale(24),
    fontWeight: '600',
    marginBottom: scale(20),
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
  head: {
    flexDirection: 'row',
    height: scale(50),
    backgroundColor: '#4A90E2',
    borderRadius: scale(8),
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
  },
  headText: {
    textAlign: 'center',
    fontSize: scale(16),
    fontWeight: '600',
    color: '#FFFFFF',
    paddingVertical: scale(15),
  },
  row: {
    flexDirection: 'row',
    height: scale(40),
    borderRadius: scale(8),
  },
  tableText: {
    textAlign: 'center',
    fontSize: scale(16),
    color: '#2c3e50',
    paddingVertical: scale(10),
  },
})

export default TimeScreen
