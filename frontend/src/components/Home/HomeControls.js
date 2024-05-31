import React from 'react'
import { View, Animated } from 'react-native'
import { homeScreenStyles } from '../../styles/homeScreenStyles'
import HomeButton from './HomeButton'

const HomeControls = ({
  selectedDate,
  goToPrevious,
  goToNext,
  goToNow,
  fadeAnim,
}) => {
  const isToday = selectedDate
    ? new Date().toDateString() === selectedDate.toDateString()
    : false

  return (
    <View style={homeScreenStyles.buttonContainer}>
      <HomeButton onPress={goToPrevious} text="이전 날짜" />
      {!isToday && selectedDate && (
        <Animated.View
          style={[homeScreenStyles.buttonTo, { opacity: fadeAnim }]}
        >
          <HomeButton onPress={goToNow} text="오늘 날짜로" />
        </Animated.View>
      )}
      <HomeButton onPress={goToNext} text="다음 날짜" />
    </View>
  )
}

export default HomeControls
