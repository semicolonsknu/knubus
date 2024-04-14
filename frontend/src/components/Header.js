import React from 'react'
import { View, Image, StyleSheet,TouchableOpacity,Linking } from 'react-native'


// 로고를 클릭하면 https://wwwk.kangwon.ac.kr/www/contents.do?key=2414& 링크가 인터넷 앱에서 열리도록 수정 @구희원 (완료)
// 로고 교체 (완료)
const Header = () => {
  const handleLogoPress = () => {
    Linking.openURL('https://wwwk.kangwon.ac.kr/www/contents.do?key=2414&');
  };
  
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress = {handleLogoPress}>
      <Image
        source={require('../../assets/public/Logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: '100%',
  },
})

export default Header
