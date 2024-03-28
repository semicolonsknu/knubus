import React, {useState} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import Navbar from './Navbar'

const HeaderComponent = () => {
 const [isNavbarVisible, setIsNavbarVisible] = useState(false);
 
 const toggleNavbar = () => {
  setIsNavbarVisible(!isNavbarVisible);
 }

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <TouchableOpacity onPress={toggleNavbar}>
          <Image
            style = {styles.image}
            source={require('../../assets/menu.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/Logo.png')}
            resizeMode="contain"
          />
        </View>
      </View>

      {isNavbarVisible && (
        <View style={styles.section}>
          <Text>------------- Navbar 영역 -------------</Text>
          <Navbar />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', //세로로 배치
    justifyContent: 'center',
    marginTop: 20, // 필요에 따라 조정하세요
  },
  header: {
    flexDirection: 'row', // 이미지를 가로로 나열
    alignItems: 'center',
    marginBottom: 10,
    marginTop : 10, //헤더 영역과 이미지 간의 여백 설정
  },
  imagecontainer: {
    flex : 1, //로고 이미지를 중앙에 배치하기 위해 flex 추가
    justifyContent: 'center', //로고 이미지를 세로 중앙에 배치
    marginHorizontal: 10,
  },
  image: {
    width: 56,
    height:56,
  },
  logoImage: {
    width: 100,
    height: 100,
    alignSelf: 'center', //로고 이미지를 가로로 중앙에 배치
  },
  section: {
    borderColor: 'red',
    borderWidth: 5,
    margin: 5,
    padding: 5,
    width: '90%',
  },

});

export default HeaderComponent;
