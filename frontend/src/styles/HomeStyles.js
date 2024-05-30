import { StyleSheet } from 'react-native'
import { scale } from '../utils/dimensionsUtils'

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export const roundStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(20),
    paddingVertical: scale(15),
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

export const timelineStyles = StyleSheet.create({
  // 컨테이너 --------------------------------------------------------------
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  // stop 컨테이너 --------------------------------------------------------------
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

  // 색상 --------------------------------------------------------------
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
