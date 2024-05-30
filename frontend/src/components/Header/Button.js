import React from 'react'
import { Pressable, Text, Image } from 'react-native'
import { buttonStyles } from '../../styles/headerStyles'

const Button = ({ onPress, text, imageURL }) => {
  return (
    <Pressable onPress={onPress}>
      {imageURL ? (
        <Image
          source={imageURL}
          resizeMode="contain"
          style={buttonStyles.logo}
        />
      ) : (
        <Text style={buttonStyles.buttonText}>{text}</Text>
      )}
    </Pressable>
  )
}

export default Button
