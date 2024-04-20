import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native'
import { Table, Row } from 'react-native-table-component'
import scheduleData from '../data/schedule.json'

const widthArr = [60, 80, 80, 85, 85, 85, 85, 85, 85, 85, 85, 75, 85]
const { schedule } = scheduleData

const RenderHead = () => (
  <Row
    data={['구분', ...Object.keys(schedule[0].tables)]}
    widthArr={widthArr}
    style={styles.head}
    textStyle={styles.headText}
  />
)

const RenderRows = () => (
  <>
    {schedule.map((round, index) => (
      <AnimatedRow key={index} round={round} index={index} />
    ))}
  </>
)

const AnimatedRow = ({ round, index }) => {
  const [scale] = React.useState(new Animated.Value(1))

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start()
    console.log('Row pressed', round.round)
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress}>
      <Animated.View
        style={{
          transform: [{ scale }],
        }}
      >
        <Row
          data={[round.round, ...Object.values(round.tables)]}
          widthArr={widthArr}
          style={[
            styles.row,
            { backgroundColor: index % 2 ? '#f4f4f8' : 'white' },
          ]}
          textStyle={styles.tableText}
        />
      </Animated.View>
    </TouchableOpacity>
  )
}

const TimeScreen = () => {
  const totalWidth = widthArr.reduce((acc, cur) => acc + cur, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>운행 시간표</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.tableContainer, { minWidth: totalWidth }]}>
          <Table borderStyle={styles.border}>
            <RenderHead />
            <RenderRows />
          </Table>
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
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#2c3e50',
  },
  tableContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 8,
  },
  border: {
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  head: {
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  row: {
    height: 40,
    borderRadius: 8,
  },
  tableText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2c3e50',
  },
})

export default TimeScreen
