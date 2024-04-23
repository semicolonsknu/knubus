import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Linking,
  Dimensions,
  Text,
} from 'react-native'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

const Header = () => {
  const handlePress = () => {
    Linking.openURL('https://wwwk.kangwon.ac.kr/www/contents.do?key=2414&')
  }

  // 디데이 계산
  const targetDate = new Date(2024, 5, 24)
  const currentDate = new Date()
  const diff = targetDate - currentDate
  const day = Math.ceil(diff / (1000 * 60 * 60 * 24))

  // 디데이 Text 로직
  let dayText
  if (day > 0) {
    dayText = `종강 D-${day}`
  } else if (day === 0) {
    dayText = '종강'
  } else {
    dayText = '운행종료'
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} style={styles.pressable}>
        <Text style={styles.wText}>TESTTEST</Text>
        <Image
          source={require('../../assets/KNUB.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.dayText}>{dayText}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: scale(10),
  },
  logo: {
    width: scale(100),
    height: scale(70),
    marginHorizontal: scale(15),
    flex: 0,
  },
  wText: {
    fontSize: scale(16),
    color: '#fff',
  },
  dayText: {
    fontSize: scale(16),
    color: '#B0BEC5',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginVertical: scale(5),
  },
})

export default Header
