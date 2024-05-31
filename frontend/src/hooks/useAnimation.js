import { useState, useEffect } from 'react'
import { Animated } from 'react-native'

export const useAnimation = (initialValue, finalValue, duration) => {
  const [fadeAnim] = useState(new Animated.Value(initialValue))

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: finalValue,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: initialValue,
            duration: duration,
            useNativeDriver: true,
          }),
        ])
      ).start()
    }

    startAnimation()

    const interval = setInterval(startAnimation, 1000)

    return () => clearInterval(interval)
  }, [fadeAnim, initialValue, finalValue, duration])

  return fadeAnim
}
