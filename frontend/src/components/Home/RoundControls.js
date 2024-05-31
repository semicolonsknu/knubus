import React from 'react'
import { View, Text, Pressable, Animated } from 'react-native'
import { roundStyles } from '../../styles/HomeStyles'
import KNUBus_Timetable from '../../data/KNUBus_Timetable.json'

const RoundControls = ({
  selectedIndex,
  currentIndex,
  goToPrevious,
  goToNext,
  goToNow,
  fadeAnim,
}) => {
  return (
    <View style={roundStyles.stateListContainer}>
      {selectedIndex > 0 && (
        <Pressable onPress={goToPrevious} style={roundStyles.button}>
          <Text style={roundStyles.buttonText}>이전 회차</Text>
        </Pressable>
      )}
      {selectedIndex !== currentIndex && (
        <Animated.View style={[roundStyles.buttonTo, { opacity: fadeAnim }]}>
          <Pressable onPress={goToNow}>
            <Text style={roundStyles.buttonText}>현재 회차로</Text>
          </Pressable>
        </Animated.View>
      )}
      {selectedIndex < KNUBus_Timetable.timetable.length - 1 && (
        <Pressable onPress={goToNext} style={roundStyles.button}>
          <Text style={roundStyles.buttonText}>다음 회차</Text>
        </Pressable>
      )}
    </View>
  )
}

export default RoundControls
