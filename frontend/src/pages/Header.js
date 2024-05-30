import React from 'react'
import { View, Image, Pressable, Text } from 'react-native'
import { openURL } from '../utils/urlUtils'
import { getDay } from '../utils/dateUtils'
import { styles } from '../styles/headerStyles'

// 카카오톡 문의 버튼 클릭 핸들러
const handleKakaoButtonPress = () => {
  openURL('https://open.kakao.com/o/sAhUQNng')
}

// 로고 버튼 클릭 핸들러 (강원대학교 공식 홈페이지로 이동)
const handleLogoButtonPress = () => {
  openURL('https://www.kangwon.ac.kr/www/contents.do?key=2414')
}

const Header = () => {
  const dDayText = getDay(new Date(2024, 5, 24)) // 디데이 텍스트 계산

  return (
    <View style={styles.container}>
      {/* 카카오톡 문의 버튼 */}
      <Pressable onPress={handleKakaoButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>카카오톡 문의</Text>
      </Pressable>

      {/* 로고 버튼 (강원대학교 공식 홈페이지로 이동) */}
      <Pressable onPress={handleLogoButtonPress} style={styles.button}>
        <Image
          source={require('../../assets/KNUB.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </Pressable>

      {/* 디데이 날짜 표시 */}
      <Text style={styles.dDayText}>{dDayText}</Text>
    </View>
  )
}

export default Header
