import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'

export const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topContainer: {
    position: 'absolute',
    top: scale(40),
    left: scale(40),
    right: scale(40),
    borderRadius: scale(7),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  topText: {
    textAlign: 'center',
    padding: scale(7),
    paddingHorizontal: scale(10),
    color: '#FFFFFF',
    fontSize: scale(12),
    fontWeight: '400',
  },
})

export const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
  },
  modalContent: {
    backgroundColor: '#F5F5F5',
    borderRadius: scale(7),
    alignItems: 'center',
    padding: scale(15),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    fontSize: scale(17),
    fontWeight: '600',
    color: '#2C3E50',
  },
  modalImage: {
    width: scale(230),
    height: scale(300),
    borderRadius: scale(7),
    marginVertical: scale(12),
    marginHorizontal: scale(5),
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: scale(20),
    paddingVertical: scale(8),
    paddingHorizontal: scale(22),
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

export const stationStyles = StyleSheet.create({
  scrollView: {
    position: 'absolute',
    bottom: scale(35),
    left: scale(15),
    right: scale(15),
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    borderRadius: scale(7),
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(6) },
    shadowOpacity: 0.1,
    shadowRadius: scale(10),
    elevation: 3,
  },
  scrollImage: {
    width: scale(90),
    height: scale(100),
    marginRight: scale(10),
    borderRadius: scale(7),
  },
})
