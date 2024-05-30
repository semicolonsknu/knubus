import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'

export const headerStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dDayText: {
    fontSize: scale(13),
    fontWeight: '500',
    color: '#B0BEC5',
  },
})

export const buttonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(10),
  },
  buttonText: {
    fontSize: scale(13),
    fontWeight: '500',
    color: '#B0BEC5',
  },
  logo: {
    width: scale(100),
    height: scale(70),
  },
})
