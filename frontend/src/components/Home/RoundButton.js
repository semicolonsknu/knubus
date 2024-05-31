import React from 'react'
import { Pressable, Text, Animated } from 'react-native'
import { roundStyles } from '../../styles/roundStyles'
import KNUBus_Timetable from '../../data/KNUBus_Timetable.json'

const RoundButton = ({
  type,
  selectedIndex,
  currentIndex,
  onPress,
  fadeAnim,
}) => {
  let buttonText = ''
  let condition = true

  switch (type) {
    case 'previous':
      buttonText = '이전 회차'
      condition = selectedIndex > 0
      break
    case 'current':
      buttonText = '현재 회차로'
      condition = selectedIndex !== currentIndex
      break
    case 'next':
      buttonText = '다음 회차'
      condition = selectedIndex < KNUBus_Timetable.timetable.length - 1
      break
    default:
      return null
  }

  const ButtonComponent = type === 'current' ? Animated.View : Pressable

  return condition ? (
    <ButtonComponent
      style={
        type === 'current'
          ? [roundStyles.buttonTo, { opacity: fadeAnim }]
          : roundStyles.button
      }
      onPress={onPress}
    >
      <Text style={roundStyles.buttonText}>{buttonText}</Text>
    </ButtonComponent>
  ) : null
}

export default RoundButton
