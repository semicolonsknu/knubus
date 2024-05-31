import React from 'react'
import { View, Text } from 'react-native'
import { roundStyles } from '../../styles/roundStyles'

const RoundStateList = () => (
  <View style={roundStyles.stateListContainer}>
    {[
      { color: '#B0BEC5', text: '운행 종료' },
      { color: '#FF5757', text: '현재 운행' },
      { color: '#38B6FF', text: '운행 예정' },
    ].map((item, index) => (
      <View key={index} style={roundStyles.stateContainer}>
        <View style={[roundStyles.state, { backgroundColor: item.color }]} />
        <Text style={roundStyles.stateText}>{item.text}</Text>
      </View>
    ))}
  </View>
)

export default RoundStateList
