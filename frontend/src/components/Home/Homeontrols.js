import React from 'react'
import { View, Text, Pressable, Animated } from 'react-native'
import { homeScreenStyles } from '../../styles/HomeStyles'

const NavigationButton = ({ onPress, text }) => (
  <Pressable style={homeScreenStyles.button} onPress={onPress}>
    <Text style={homeScreenStyles.buttonText}>{text}</Text>
  </Pressable>
)

const Homeontrols = ({
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
      <NavigationButton onPress={goToPrevious} text="이전 날짜" />

      {!isToday && selectedDate && (
        <Animated.View
          style={[homeScreenStyles.buttonTo, { opacity: fadeAnim }]}
        >
          <NavigationButton onPress={goToNow} text="오늘 날짜로" />
        </Animated.View>
      )}

      <NavigationButton onPress={goToNext} text="다음 날짜" />
    </View>
  )
}

export default Homeontrols
