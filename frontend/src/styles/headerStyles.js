import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'

const commonTextStyles = {
  fontSize: scale(13),
  fontWeight: '500',
  color: '#B0BEC5',
}

export const headerStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    ...commonTextStyles,
  },
})

export const buttonStyles = StyleSheet.create({
  text: {
    ...commonTextStyles,
  },
  logo: {
    width: scale(100),
    height: scale(70),
  },
})
