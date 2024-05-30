import React from 'react'
import { View } from 'react-native'
import TableRow from './TableRow'

const TableBody = ({ timetable, widthArr }) => (
  <View>
    {timetable.map((round, index) => (
      <TableRow key={index} round={round} index={index} widthArr={widthArr} />
    ))}
  </View>
)

export default TableBody
