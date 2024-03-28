import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

const Header = ({ onLogoPress, onMenuPress }) => {
  return (
    <View style={styles.header}>
      {/* 메뉴 아이콘 */}
      <TouchableOpacity onPress={onMenuPress}>
        <Image
          source={require('../../assets/icon-menu.png')}
          style={styles.menuIcon}
        />
      </TouchableOpacity>

      {/* 로고 */}
      <TouchableOpacity onPress={onLogoPress}>
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
      </TouchableOpacity>

      {/* 우측 공간 비움 (레이아웃 조정을 위해) */}
      <View style={styles.spacer} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  logo: {
    flex: 1,
    height: 50,
    resizeMode: 'center',
  },
  spacer: {
    width: 30, // 메뉴 아이콘과 동일한 크기로 우측에 공간을 만듭니다.
  },
})

export default Header
