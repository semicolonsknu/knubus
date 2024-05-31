import React from 'react'
import { View, Text } from 'react-native'
import { formatFullDate } from '../../utils/dateUtils'
import { homeScreenStyles } from '../../styles/HomeStyles'
import Round from './Round'
import Homeontrols from './Homeontrols'
import { useDate } from '../../hooks/useDate'

const DateText = ({ selectedDate, dateColor }) => (
  <Text style={[homeScreenStyles.dateText, dateColor()]}>
    {formatFullDate(selectedDate)}
  </Text>
)

const DateNameText = ({ dateName, textColor }) =>
  dateName ? (
    <Text style={[homeScreenStyles.dateNameText, textColor()]}>{dateName}</Text>
  ) : null

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
      <Homeontrols
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
