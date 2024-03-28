import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

// 로고를 클릭하면 https://wwwk.kangwon.ac.kr/www/contents.do?key=2414& 링크가 인터넷 앱에서 열리도록 수정 @구희원
// 로고 교체 필요 @구희원
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/public/Logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: '100%',
  },
})

export default Header
