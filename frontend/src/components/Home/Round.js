import React from 'react'
import { View, Text } from 'react-native'
import KNUBus_Timetable from '../../data/KNUBus_Timetable.json'
import Timeline from './Timeline'
import RoundControls from './RoundControls'
import MascotImage from './MascotImage'
import { roundStyles } from '../../styles/roundStyles'
import RoundStateList from './RoundStateList'
import RoundInfo from './RoundInfo'
import CurrentTimeText from './CurrentTimeText'
import { useRound } from '../../hooks/useRound'

const Round = ({ isOperation }) => {
  const {
    currentTime,
    currentIndex,
    selectedIndex,
    fadeAnim,
    goToPrevious,
    goToNext,
    goToNow,
  } = useRound()

  if (!isOperation) {
    return <MascotImage />
  }

  const currentRound = KNUBus_Timetable.timetable[selectedIndex]
  const { round, tables } = currentRound

  return (
    <View style={roundStyles.container}>
      <View style={roundStyles.textContainer}>
        <Text style={roundStyles.roundText}>{round}</Text>
        <CurrentTimeText currentTime={currentTime} />
      </View>
      <RoundControls
        selectedIndex={selectedIndex}
        currentIndex={currentIndex}
        goToPrevious={goToPrevious}
        goToNext={goToNext}
        goToNow={goToNow}
        fadeAnim={fadeAnim}
      />
      <View style={roundStyles.roundContainer}>
        <RoundStateList />
        <RoundInfo />
        <Timeline
          roundData={Object.entries(tables).map(([name, time]) => ({
            name,
            time,
          }))}
        />
      </View>
    </View>
  )
}

export default Round
