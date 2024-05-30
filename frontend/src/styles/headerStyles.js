import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export const scale = (size) => (width / 375) * size

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: scale(13),
    fontWeight: '500',
    color: '#B0BEC5',
  },
  dDayText: {
    fontSize: scale(15),
    color: '#B0BEC5',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  logo: {
    width: scale(100),
    height: scale(70),
  },
})
