import React from 'react'
import { Text } from 'react-native'
import { timetableStyles } from '../../styles/busTimeStyles'

const ErrorMessage = () => {
  return (
    <Text style={timetableStyles.errorText}>
      시간표를 불러오는데 문제가 발생했습니다.
    </Text>
  )
}

export default ErrorMessage
