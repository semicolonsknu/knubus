import React from 'react'
import { View, Image, StyleSheet, Pressable, Linking } from 'react-native'

const Header = () => {
  const handleLogoPress = () => {
    Linking.openURL('https://wwwk.kangwon.ac.kr/www/contents.do?key=2414&')
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handleLogoPress}>
        <Image
          source={require('../../assets/KNUB.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
