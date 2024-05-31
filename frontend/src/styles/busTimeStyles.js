import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'

const commonTextStyles = {
  textAlign: 'center',
  color: '#2c3e50',
  paddingVertical: scale(10),
  fontSize: scale(13),
}

const commonContainerStyles = {
  borderRadius: scale(7),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

export const timetableStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(16),
    backgroundColor: '#fff',
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginVertical: scale(20),
    textAlign: 'center',
    color: '#2c3e50',
  },
  tableContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: scale(20),
  },
})

export const tableHeadStyles = StyleSheet.create({
  container: {
    ...commonContainerStyles,
    backgroundColor: '#4A90E2',
  },
  tableText: {
    ...commonTextStyles,
    fontWeight: '500',
    color: '#FFFFFF',
  },
})

export const tableRowStyles = StyleSheet.create({
  container: {
    ...commonContainerStyles,
    backgroundColor: '#FFFFFF',
  },
  tableText: {
    ...commonTextStyles,
  },
})
