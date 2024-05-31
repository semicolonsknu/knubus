import React from 'react'
import { View } from 'react-native'
import { roundStyles } from '../../styles/roundStyles'
import RoundButton from './RoundButton'

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
      <RoundButton
        type="previous"
        selectedIndex={selectedIndex}
        onPress={goToPrevious}
      />
      <RoundButton
        type="current"
        selectedIndex={selectedIndex}
        currentIndex={currentIndex}
        onPress={goToNow}
        fadeAnim={fadeAnim}
      />
      <RoundButton
        type="next"
        selectedIndex={selectedIndex}
        onPress={goToNext}
      />
    </View>
  )
}

export default RoundControls
