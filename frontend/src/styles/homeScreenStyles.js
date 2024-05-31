// homeScreenStyles.js
import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'
import { commonStyles } from './commonStyles'

export const homeScreenStyles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: scale(25),
    paddingVertical: scale(18),
  },
  dateText: {
    fontSize: scale(16),
    fontWeight: '500',
    marginBottom: scale(4),
  },
  dateNameText: {
    fontSize: scale(17),
    fontWeight: '700',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: scale(10),
    marginBottom: scale(5),
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
  blueText: {
    color: '#38B6FF',
  },
  redText: {
    color: '#FF5757',
  },
  grayText: {
    color: '#B0BEC5',
  },
  knuText: {
    color: '#2c3e50',
  },
  roundContainer: {
    flex: 1,
    marginTop: scale(10),
    width: '100%',
  },
})
