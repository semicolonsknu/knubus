import React from 'react'
import { View, Text } from 'react-native'
import { roundStyles } from '../../styles/roundStyles'

const RoundInfo = () => (
  <View style={roundStyles.infoContainer}>
    <Text style={roundStyles.infoText}>
      실제 운행과 약간의 오차가 존재 할 수 있음
    </Text>
  </View>
)

export default RoundInfo
