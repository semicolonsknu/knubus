import React from 'react'
import { View } from 'react-native'
import { homeScreenStyles } from '../../styles/homeScreenStyles'
import { useDate } from '../../hooks/useDate'
import DateText from './DateText'
import DateNameText from './DateNameText'
import HomeControls from './HomeControls'
import Round from './Round'

const HomeScreen = () => {
  const {
    selectedDate,
    fadeAnim,
    dateName,
    goToPrevious,
    goToNext,
    goToNow,
    dateColor,
    textColor,
    isOperation,
  } = useDate()

  return (
    <View style={homeScreenStyles.container}>
      <DateText selectedDate={selectedDate} dateColor={dateColor} />
      <DateNameText dateName={dateName} textColor={textColor} />
      <HomeControls
        goToPrevious={goToPrevious}
        goToNext={goToNext}
        goToNow={goToNow}
        fadeAnim={fadeAnim}
      />
      <View style={homeScreenStyles.roundContainer}>
        <Round isOperation={isOperation} />
      </View>
    </View>
  )
}

export default HomeScreen
