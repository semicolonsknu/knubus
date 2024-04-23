import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Linking,
  Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get('window')
const scale = (size) => (width / 375) * size

const Header = () => {
  const handlePress = () => {
    Linking.openURL('https://wwwk.kangwon.ac.kr/www/contents.do?key=2414&')
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
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
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: scale(100),
    height: '100%',
  },
})

export default Header
