import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import KNUBus_Timetable from '../../data/KNUBus_Timetable.json'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { timetableStyles } from '../../styles/busTimeStyles'
import { calculateTotalWidth } from '../../utils/tableUtils'

const widthArr = [65, 65, 65, 80, 80, 65, 65, 80, 75, 65, 80, 60, 65]
const { timetable } = KNUBus_Timetable

const Timetable = () => {
  const totalWidth = calculateTotalWidth(widthArr)

  return (
    <View style={timetableStyles.container}>
      <Text style={timetableStyles.header}>운행 시간표</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={[timetableStyles.tableContainer, { minWidth: totalWidth }]}
        >
          <TableHead schedule={timetable} widthArr={widthArr} />
          <TableBody timetable={timetable} widthArr={widthArr} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Timetable
