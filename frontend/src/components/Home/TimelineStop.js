import React from 'react'
import { View, Text, Animated } from 'react-native'
import { timelineStyles } from '../../styles/HomeStyles'
import TimelineCircle from './TimelineCircle'

const TimelineStop = ({
  stop,
  isCurrentStop,
  isPastStop,
  fadeAnim,
  isLast,
}) => {
  const stopStyle = isCurrentStop
    ? [timelineStyles.current, { opacity: fadeAnim }]
    : isPastStop
    ? timelineStyles.past
    : timelineStyles.future

  return (
    <View style={timelineStyles.timelineContainer}>
      <View style={timelineStyles.timeline}>
        <TimelineCircle stopStyle={stopStyle} />
        {!isLast && (
          <Animated.View style={[timelineStyles.circleBar, stopStyle]} />
        )}
      </View>
      <View style={timelineStyles.stopInfo}>
        <Text
          style={[
            timelineStyles.stopTime,
            isCurrentStop
              ? timelineStyles.currentTime
              : isPastStop
              ? timelineStyles.pastText
              : timelineStyles.futureText,
          ]}
        >
          {stop.time}
        </Text>
        <Text style={timelineStyles.stopName}>{stop.name}</Text>
      </View>
    </View>
  )
}

export default TimelineStop
