import React, { useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { tableRowStyles } from '../../styles/busTimeStyles'
import { scale } from '../../utils/dimensionsUtils'

const TableRow = ({ round, index, widthArr, handlePress }) => {
  const cells = useMemo(() => {
    return [round.round, ...Object.values(round.tables)].map(
      (cell, cellIndex) => (
        <Text
          key={cellIndex}
          style={[
            tableRowStyles.tableText,
            { width: scale(widthArr[cellIndex]) },
          ]}
        >
          {cell}
        </Text>
      )
    )
  }, [round, widthArr])

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress}>
      <View
        style={[
          tableRowStyles.container,
          { backgroundColor: index % 2 ? '#f4f4f8' : 'white' },
        ]}
      >
        {cells}
      </View>
    </TouchableOpacity>
  )
}

export default TableRow
