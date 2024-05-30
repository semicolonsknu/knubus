import React from 'react'
import { View, Text } from 'react-native'
import { getdDay } from '../../utils/dateUtils'
import { headerStyles } from '../../styles/headerStyles'
import Button from './Button'
import { openURL } from '../../utils/urlUtils'

const KAKAO_URL = 'https://open.kakao.com/o/sAhUQNng'
const LOGO_URL = 'https://www.kangwon.ac.kr/www/contents.do?key=2414'
const D_DAY_DATE = new Date(2024, 5, 24)

const Header = () => {
  const dDayText = getdDay(D_DAY_DATE)

  const handleKakaoPress = () => {
    openURL(KAKAO_URL)
  }

  const handleLogoPress = () => {
    openURL(LOGO_URL)
  }

  return (
    <View style={headerStyles.container}>
      {/* 카카오톡 문의 버튼 */}
      <Button text="카카오톡 문의" onPress={handleKakaoPress} />

      {/* 로고 버튼 */}
      <Button
        imageURL={require('../../../assets/KNUB.png')}
        onPress={handleLogoPress}
      />

      {/* D-day 텍스트 */}
      <Text style={headerStyles.dDayText}>{dDayText}</Text>
    </View>
  )
}

export default Header
