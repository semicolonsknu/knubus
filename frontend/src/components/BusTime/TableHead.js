import React from 'react'
import { View, Text } from 'react-native'
import { tableHeadStyles } from '../../styles/busTimeStyles'
import { scale } from '../../utils/dimensionsUtils'
import { getTableHeader } from '../../utils/tableUtils'

const TableHead = ({ timetable, widthArr, heightArr }) => {
  if (
    !timetable?.length ||
    !Array.isArray(widthArr) ||
    !Array.isArray(heightArr)
  ) {
    return null
  }

  const tableHeaders = getTableHeader(timetable)

  return (
    <View style={[tableHeadStyles.container, { flexDirection: 'row' }]}>
      {tableHeaders.map((header, index) => (
        <View
          key={index}
          style={{
            width: scale(widthArr[index]),
            height: heightArr[index],
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={tableHeadStyles.tableText}>{header}</Text>
        </View>
      ))}
    </View>
  )
}

export default TableHead
