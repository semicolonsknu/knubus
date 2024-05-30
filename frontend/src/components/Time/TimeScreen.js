import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import KNUBus_Timetable from '../../data/KNUBus_Timetable.json'
import TableHead from './TableHead'
import TableRow from './TableRow'
import { timeScreenStyles } from '../../styles/TimeStyles'

const widthArr = [65, 65, 65, 80, 80, 65, 65, 80, 75, 65, 80, 60, 65]
const { timetable } = KNUBus_Timetable

const TimeScreen = () => {
  const totalWidth = widthArr.reduce((acc, cur) => acc + cur, 0)

  return (
    <View style={timeScreenStyles.container}>
      <Text style={timeScreenStyles.header}>운행 시간표</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={[timeScreenStyles.tableContainer, { minWidth: totalWidth }]}
        >
          <TableHead schedule={timetable} widthArr={widthArr} />
          {timetable.map((round, index) => (
            <TableRow
              key={index}
              round={round}
              index={index}
              widthArr={widthArr}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default TimeScreen
