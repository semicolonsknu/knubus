import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import KNUBus_Timetable from '../../data/KNUBus_Timetable.json'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { timetableStyles } from '../../styles/busTimeStyles'
import {
  calculateTotalWidth,
  calculateWidth,
  calculateHeight,
  calculateTotalHeight,
} from '../../utils/tableUtils'
import ErrorMessage from './ErrorMessage'

const Timetable = () => {
  const [widthArr, setWidthArr] = useState([])
  const [heightArr, setHeightArr] = useState([])
  const { timetable } = KNUBus_Timetable

  useEffect(() => {
    if (timetable?.length) {
      setWidthArr(calculateWidth(timetable))
      setHeightArr(calculateHeight(timetable))
    }
  }, [timetable])

  if (!timetable?.length || !widthArr.length || !heightArr.length) {
    return <ErrorMessage />
  }

  const totalWidth = calculateTotalWidth(widthArr)
  const totalHeight = calculateTotalHeight(heightArr)

  return (
    <View style={timetableStyles.container}>
      <Text style={timetableStyles.title}>운행 시간표</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={[
            timetableStyles.tableContainer,
            { minWidth: totalWidth, minHeight: totalHeight },
          ]}
        >
          <TableHead
            timetable={timetable}
            widthArr={widthArr}
            heightArr={heightArr}
          />
          <TableBody timetable={timetable} widthArr={widthArr} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Timetable
