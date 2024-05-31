import React from 'react'
import { Animated } from 'react-native'
import { timelineStyles } from '../../styles/timelineStyles'

const TimelineCircle = ({ stopStyle }) => {
  return <Animated.View style={[timelineStyles.circle, stopStyle]} />
}

export default TimelineCircle
