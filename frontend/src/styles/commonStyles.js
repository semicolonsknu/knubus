// commonStyles.js
import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: scale(15),
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: scale(20),
    paddingVertical: scale(7),
    paddingHorizontal: scale(15),
    marginLeft: scale(4),
    marginRight: scale(4),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(2),
  },
  buttonTo: {
    backgroundColor: '#50E3C2',
    borderRadius: scale(20),
    paddingVertical: scale(7),
    paddingHorizontal: scale(15),
    marginLeft: scale(4),
    marginRight: scale(4),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(2),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scale(12),
    fontWeight: 'bold',
  },
})
