import React from 'react'
import { View } from 'react-native'
import TableRow from './TableRow'

const TableBody = ({ timetable, widthArr }) => {
  if (!timetable?.length || !Array.isArray(widthArr) || !widthArr.length) {
    return null
  }

  return (
    <View>
      {timetable.map((round, index) => (
        <TableRow key={index} round={round} index={index} widthArr={widthArr} />
      ))}
    </View>
  )
}

export default TableBody
