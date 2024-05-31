// timelineStyles.js
import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'

export const timelineStyles = StyleSheet.create({
  // Container
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  // Timeline
  timelineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeline: {
    alignItems: 'center',
    marginRight: scale(13),
  },
  circleBar: {
    width: scale(3),
    flex: 1,
  },
  circle: {
    width: scale(10),
    height: scale(12),
    borderRadius: scale(10),
  },
  stopInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  stopTime: {
    fontSize: scale(17),
    fontWeight: 'bold',
    marginTop: scale(2),
    marginBottom: scale(2),
  },
  stopName: {
    fontSize: scale(13),
    fontWeight: 'normal',
    color: '#2c3e50',
    marginLeft: scale(10),
    marginBottom: scale(13),
  },
  // Colors
  past: {
    backgroundColor: '#B0BEC5',
  },
  current: {
    backgroundColor: '#FF5757',
  },
  future: {
    backgroundColor: '#38B6FF',
  },
  pastText: {
    color: '#B0BEC5',
    fontWeight: 'bold',
  },
  currentTime: {
    color: '#FF5757',
    fontWeight: 'bold',
  },
  futureText: {
    color: '#38B6FF',
    fontWeight: 'bold',
  },
})
