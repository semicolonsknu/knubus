import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

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
          style={[rowStyles.tableText, { width: widthArr[cellIndex] }]}
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
        style={[rowStyles.headText, { width: widthArr[index] }]}
      >
        {header}
      </Text>
    ))}
  </View>
)

const rowStyles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 8,
  },
  tableText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2c3e50',
    paddingVertical: 10,
  },
})

export { Row, RenderHead }
