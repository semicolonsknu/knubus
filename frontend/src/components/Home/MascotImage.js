import React, { useState } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { roundStyles } from '../../styles/roundStyles'

const MascotImage = () => {
  const [toggle, setToggle] = useState(false)

  const toggleImage = () => {
    setToggle(!toggle)
  }

  return (
    <View style={roundStyles.container}>
      <TouchableOpacity
        onPress={toggleImage}
        style={roundStyles.imageContainer}
      >
        <Image
          source={
            toggle
              ? require('../../../assets/public/Mascot1.png')
              : require('../../../assets/public/Mascot0.png')
          }
          style={roundStyles.image}
        />
      </TouchableOpacity>
    </View>
  )
}

export default MascotImage
