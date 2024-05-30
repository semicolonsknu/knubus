import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  Dimensions,
} from 'react-native'
import { openURL } from '../utils/urlUtils'
import { calculateDDay } from '../utils/dateUtils'

const { width } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

const Header = () => {
  const dayText = calculateDDay(new Date(2024, 5, 24)) // Note: Month is 0-indexed in JavaScript

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => openURL('https://open.kakao.com/o/sAhUQNng')}
        style={styles.button}
      >
        <Text style={styles.kakaoText}>카카오톡 문의</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          openURL('https://www.kangwon.ac.kr/www/contents.do?key=2414')
        }
        style={styles.button}
      >
        <Image
          source={require('../../assets/KNUB.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </Pressable>
      <Text style={styles.text}>{dayText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
  kakaoText: {
    fontSize: scale(13),
    fontWeight: '500',
    color: '#B0BEC5',
  },
  text: {
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

export default Header
