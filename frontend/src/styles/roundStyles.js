// roundStyles.js
import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'
import { commonStyles } from './commonStyles'

export const roundStyles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    backgroundColor: '#ffffff',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(10),
  },
  wText: {
    fontSize: scale(20),
    fontWeight: '700',
    marginRight: scale(5),
    color: '#ffffff',
  },
  roundText: {
    fontSize: scale(20),
    fontWeight: '700',
    marginRight: scale(5),
    color: '#4A90E2',
  },
  timeText: {
    fontSize: scale(12),
    fontWeight: '500',
    color: '#B0BEC5',
    marginTop: scale(7),
  },
  stateListContainer: {
    flexDirection: 'row',
    marginBottom: scale(10),
    justifyContent: 'center',
  },
  button: {
    ...commonStyles.button,
  },
  buttonTo: {
    ...commonStyles.buttonTo,
  },
  buttonText: {
    ...commonStyles.buttonText,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(200),
    height: scale(200),
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
  roundContainer: {
    flex: 1,
    marginTop: scale(3),
    height: '100%',
    width: '100%',
  },
  stateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(5),
    marginRight: scale(5),
  },
  state: {
    width: scale(9),
    height: scale(12),
    borderRadius: scale(10),
    marginHorizontal: scale(3),
    marginTop: scale(2),
  },
  stateText: {
    marginLeft: scale(2),
    fontSize: scale(12),
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: scale(6),
    borderRadius: scale(5),
    marginBottom: scale(15),
  },
  infoText: {
    color: '#2c3e50',
    fontSize: scale(12),
  },
})
