import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

const Row = ({ round, index, widthArr, handlePress }) => (
  <TouchableOpacity activeOpacity={1} onPress={handlePress}>
    <View
      style={[
        rowStyles.row,
        { backgroundColor: index % 2 ? '#f4f4f8' : 'white' },
      ]}
    >
      {[round.round, ...Object.values(round.tables)].map((cell, cellIndex) => (
        <Text
          key={cellIndex}
          style={[rowStyles.tableText, { width: scale(widthArr[cellIndex]) }]}
        >
          {cell}
        </Text>
      ))}
    </View>
  </TouchableOpacity>
)

const RenderHead = ({ schedule, widthArr }) => (
  <View style={rowStyles.head}>
    {['구분', ...Object.keys(schedule[0].tables)].map((header, index) => (
      <Text
        key={index}
        style={[rowStyles.headText, { width: scale(widthArr[index]) }]}
      >
        {header}
      </Text>
    ))}
  </View>
)

const rowStyles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    height: scale(50),
    backgroundColor: '#4A90E2',
    borderRadius: scale(7),
  },
  headText: {
    textAlign: 'center',
    fontSize: scale(14),
    fontWeight: '500',
    color: '#FFFFFF',
    paddingVertical: scale(15),
  },
  row: {
    flexDirection: 'row',
    borderRadius: scale(7),
  },
  tableText: {
    textAlign: 'center',
    fontSize: scale(13),
    color: '#2c3e50',
    paddingVertical: scale(10),
  },
})

export { Row, RenderHead }
