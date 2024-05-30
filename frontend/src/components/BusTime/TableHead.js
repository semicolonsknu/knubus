import React from 'react'
import { View, Text } from 'react-native'
import { tableHeadStyles } from '../../styles/busTimeStyles'
import { scale } from '../../utils/dimensionsUtils'

const TableHead = ({ schedule, widthArr }) => {
  const tableHeaders = ['구분', ...Object.keys(schedule[0].tables)]

  return (
    <View style={tableHeadStyles.container}>
      {tableHeaders.map((header, index) => (
        <Text
          key={index}
          style={[tableHeadStyles.tableText, { width: scale(widthArr[index]) }]}
        >
          {header}
        </Text>
      ))}
    </View>
  )
}

export default TableHead
