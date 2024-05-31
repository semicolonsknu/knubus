import React from 'react'
import { View, Text } from 'react-native'
import { getdDay } from '../../utils/dateUtils'
import { openURL } from '../../utils/urlUtils'
import { headerStyles } from '../../styles/headerStyles'
import Button from './Button'

const KAKAO_URL = 'https://open.kakao.com/o/sAhUQNng'
const LOGO_URL = 'https://www.kangwon.ac.kr/www/contents.do?key=2414'
const DDAY_DATE = new Date(2024, 5, 24)

const Header = () => {
  const dDayText = getdDay(DDAY_DATE)

  const handlePress = (url) => () => openURL(url)

  return (
    <View style={headerStyles.container}>
      <Button text="카카오톡 문의" onPress={handlePress(KAKAO_URL)} />

      <Button
        imageURL={require('../../../assets/KNUB.png')}
        onPress={handlePress(LOGO_URL)}
      />

      <Text style={headerStyles.text}>{dDayText}</Text>
    </View>
  )
}

export default Header
