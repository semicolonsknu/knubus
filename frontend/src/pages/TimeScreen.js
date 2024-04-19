import React from 'react'
import { StyleSheet, View, ScrollView, tableText } from 'react-native'
import { Table, Row } from 'react-native-table-component'
import scheduleData from '../data/schedule.json'

const widthArr = [60, 80, 80, 85, 85, 85, 85, 85, 85, 85, 85, 75, 85]
const { schedule } = scheduleData

const RenderHead = () => (
  <Row
    data={['구분', ...Object.keys(schedule[0].tables)]}
    widthArr={widthArr}
    style={styles.head}
    tableTextStyle={styles.tableText}
  />
)

const RenderRows = () => (
  <>
    {schedule.map((round, index) => (
      <Row
        key={index}
        data={[round.round, ...Object.values(round.tables)]}
        widthArr={widthArr}
        style={{
          ...styles.row,
          backgroundColor: index % 2 ? '#F8F9FA' : 'transparent',
        }}
        tableTextStyle={styles.tableText}
      />
    ))}
  </>
)

const TimeScreen = () => {
  const totalWidth = widthArr.reduce((acc, cur) => acc + cur, 0)

  return (
    <View style={styles.container}>
      <tableText style={styles.header}>운행 시간표</tableText>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A4A4A',
  },
  tableContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    width: '100%',
    overflow: 'hidden',
  },
  border: {
    borderWidth: 2,
    borderColor: '#E8E8E8',
  },
  head: {
    height: 50,
    backgroundColor: '#38B6FF',
  },
  row: {
    height: 40,
    backgroundColor: '#F8F9FA',
  },
  tableText: {
    tableTextAlign: 'center',
    fontSize: 16,
    color: '#4A4A4A',
  },
})

export default TimeScreen
