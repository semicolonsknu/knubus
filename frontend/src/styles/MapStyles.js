import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'

const commonShadowStyles = (heightScale, radiusScale) => ({
  shadowColor: '#000',
  shadowOffset: { width: 0, height: scale(heightScale) },
  shadowOpacity: 0.1,
  shadowRadius: scale(radiusScale),
  elevation: scale(radiusScale),
})

const commonContainerStyles = {
  borderRadius: scale(7),
  backgroundColor: '#F5F5F5',
}

const commonTextStyles = {
  color: '#FFFFFF',
  fontSize: scale(12),
  textAlign: 'center',
  padding: scale(7),
}

export const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonContainerStyles,
  },
  textContainer: {
    ...commonContainerStyles,
    position: 'absolute',
    top: scale(40),
    left: scale(40),
    right: scale(40),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    ...commonTextStyles,
  },
})

export const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
  },
  content: {
    ...commonContainerStyles,
    alignItems: 'center',
    padding: scale(15),
    ...commonShadowStyles(4, 8),
  },
  text: {
    fontSize: scale(17),
    fontWeight: '600',
    color: '#2C3E50',
  },
  image: {
    width: scale(230),
    height: scale(300),
    borderRadius: scale(7),
    marginVertical: scale(12),
    marginHorizontal: scale(5),
  },
})

export const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: '#4A90E2',
    borderRadius: scale(20),
    paddingVertical: scale(5),
    paddingHorizontal: scale(22),
    marginLeft: scale(4),
    marginRight: scale(4),
    elevation: 2,
    ...commonShadowStyles(2, 2),
  },
  text: {
    ...commonTextStyles,
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
    ...commonShadowStyles(6, 10),
  },
  scrollImage: {
    width: scale(90),
    height: scale(100),
    marginRight: scale(10),
    borderRadius: scale(7),
  },
})
