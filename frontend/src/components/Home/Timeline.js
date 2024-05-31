import React from 'react'
import { View, ScrollView } from 'react-native'
import { timelineStyles } from '../../styles/HomeStyles'
import { useAnimation } from '../../hooks/useAnimation'
import { isPast, isCurrent } from '../../utils/timeUtils'
import TimelineStop from './TimelineStop'

const Timeline = ({ roundData }) => {
  const fadeAnim = useAnimation(0.2, 1, 500)

  return (
    <ScrollView contentContainerStyle={timelineStyles.scrollViewContainer}>
      <View style={timelineStyles.container}>
        {roundData.map((stop, index) => {
          const isCurrentStop = isCurrent(stop.time, roundData[index + 1]?.time)
          const isPastStop = isPast(stop.time)

          return (
            <TimelineStop
              key={index}
              stop={stop}
              isCurrentStop={isCurrentStop}
              isPastStop={isPastStop}
              fadeAnim={fadeAnim}
              isLast={index === roundData.length - 1}
            />
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Timeline
