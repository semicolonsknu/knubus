import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'

export const timeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: scale(15),
    paddingVertical: scale(20),
  },
  header: {
    fontSize: scale(20),
    fontWeight: '600',
    marginBottom: scale(10),
    color: '#2c3e50',
  },
  tableContainer: {
    flex: 1,
    marginTop: scale(10),
    paddingHorizontal: scale(20),
    width: '100%',
    overflow: 'hidden',
    borderRadius: scale(8),
  },
})

export const tableHeadStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: scale(50),
    backgroundColor: '#4A90E2',
    borderRadius: scale(7),
  },
  tableText: {
    textAlign: 'center',
    fontSize: scale(14),
    fontWeight: '500',
    color: '#FFFFFF',
    paddingVertical: scale(15),
  },
})

export const tableRowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: scale(7),
  },
  tableText: {
    textAlign: 'center',
    fontSize: scale(13),
    color: '#2c3e50',
    paddingVertical: scale(10),
  },
})
