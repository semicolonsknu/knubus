import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Image, Modal, Animated, StyleSheet, Text } from 'react-native';

// 화면의 너비와 높이를 구합니다.
const { width, height } = Dimensions.get('window');

const MapScreen = () => {
  const [animation] = React.useState(new Animated.Value(0)); // 애니메이션 값
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupImage, setPopupImage] = React.useState(null);
  const [selectedGroup, setSelectedGroup] = React.useState(null);

    // 애니메이션 처리
    const animate = (isSelected) => {
      Animated.sequence([
        Animated.timing(animation, { toValue: 1, duration: 0, useNativeDriver: false }),
        Animated.timing(animation, { toValue: 0, duration: 500, useNativeDriver: false }),
      ]).start();
    };
  
  // 그룹 버튼 정보
  const groupButtons = [
    {
      image: require('../../assets/public/미도1.jpg'),
      group: 'group1',
      style: { ...styles.group1, top: 379, left: 249 },
      circleStyle: { ...styles.circle1 },
    },
    {
      image: require('../../assets/public/의생대1.jpg'),
      group: 'group2',
      style: { ...styles.group2, top: 310, left: 278 },
      circleStyle: { ...styles.circle2 },
    },
    {
      image: require('../../assets/public/경영1.jpg'),
      group: 'group3',
      style: { ...styles.group3, top: 259, left: 175 },
      circleStyle: { ...styles.circle3 },
    },
    {
      image: require('../../assets/public/미광1.jpg'),
      group: 'group4',
      style: { ...styles.group4, top: 204, left: 60 },
      circleStyle: { ...styles.circle4 },
    },
    {
      image: require('../../assets/public/백록관1.jpg'),
      group: 'group5',
      style: { ...styles.group5, top: 268, left: 20 },
      circleStyle: { ...styles.circle5 },
    },
    {
      image: require('../../assets/public/함인섭1.jpg'),
      group: 'group6',
      style: { ...styles.group6, top: 298, left: 62 },
      circleStyle: { ...styles.circle6 },
    },
    {
      image: require('../../assets/public/동생대1.jpg'),
      group: 'group7',
      style: { ...styles.group7, top: 283, left: 237 },
      circleStyle: { ...styles.circle7 },
    },
    {
      image: require('../../assets/public/미광2.jpg'),
      group: 'group8',
      style: { ...styles.group8, top: 233, left: 114 },
      circleStyle: { ...styles.circle8 },
    },
    {
      image: require('../../assets/public/경영2.jpg'),
      group: 'group9',
      style: { ...styles.group9, top: 230, left: 198 },
      circleStyle: { ...styles.circle9 },
    },
    {
      image: require('../../assets/public/기숙사1.jpg'),
      group: 'group10',
      style: { ...styles.group10, top: 350, left: 20 },
      circleStyle: { ...styles.circle10 },
    },
    {
      image: require('../../assets/public/미도2.jpg'),
      group: 'group11',
      style: { ...styles.group11, top: 349, left: 190 },
      circleStyle: { ...styles.circle11 },
    },
    
    // 나머지 그룹 정보 추가
  ];

  // 그룹 버튼을 눌렀을 때의 처리
  const handleGroupPress = (image, group) => {
    const isSelected = selectedGroup === group;
    setShowPopup(!isSelected || !showPopup);
    setPopupImage(!isSelected || !showPopup ? image : null);
    setSelectedGroup(!isSelected || !showPopup ? group : null);
    animate(isSelected); // 애니메이션 처리
  };


  // 팝업을 닫습니다.
  const closePopup = () => {
    setShowPopup(false);
    setPopupImage(null); // 팝업 닫을 때 이미지 초기화
    setSelectedGroup(null); // 선택된 그룹 초기화
  };

  return (
    <View style={{ flex: 1, width: width, height: height }}>
      {/* 그룹 버튼 */}
      {groupButtons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={{ ...button.style, position: 'absolute', zIndex: 1 }}
          onPress={() => handleGroupPress(button.image, button.group)}
        >
          {/* 작은 동그라미 */}
          <Animated.View
            style={{
              ...button.circleStyle,
              opacity: animation.interpolate({
                inputRange: [0, 1],
                outputRange: selectedGroup === button.group ? [0, 1] : [0, 0],
              }),
              transform: [
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 3],
                  }),
                },
              ],
            }}
          />
        </TouchableOpacity>
      ))}
      {/* 지도 이미지 */}
        <Image
        source={require('../../assets/public/Map.png')}
        style={{ width: '100%', height: '100%', alignSelf: 'center', resizeMode: 'contain', marginTop: 'auto', marginBottom: 'auto' }}
      />


      {/* 팝업 모달 */}
      <Modal
        visible={showPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={closePopup}
      >
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={closePopup}>
          <View style={styles.modalContainer}>
            {/* 팝업 이미지 */}
            {popupImage && (
              <Image
                source={popupImage}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            )}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* 정류장 번호를 누르면 정류장 이미지가 나옵니다.*/}
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>정류장을 클릭하면 해당 정류장의 이미지가 표시됩니다.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group1: {
    width: 80,
    height: 30,
    backgroundColor: 'transparent',
  },
  group2: {
    width: 80,
    height: 30,
    backgroundColor: 'transparent',
  },
  // 나머지 그룹 스타일 정의
  group3: {
    width: 50,
    height: 30,
    backgroundColor : 'transparent',
  },
  group4: {
    width: 80,
    height: 30,
    backgroundColor : 'transparent',
  },
  group5: {
    width: 50,
    height: 30,
    backgroundColor : 'transparent',
  },
  group6: {
    width: 80,
    height: 30,
    backgroundColor : 'transparent',
  },
  group7: {
    width: 40,
    height: 30,
    backgroundColor : 'transparent',
  },
  group8: {
    width: 50,
    height: 30,
    backgroundColor : 'transparent',
  },
  group9: {
    width: 80,
    height: 30,
    backgroundColor : 'transparent',
  },
  group10: {
    width: 80,
    height: 30,
    backgroundColor : 'transparent',
  },
  group11: {
    width: 80,
    height: 30,
    backgroundColor : 'transparent',
  }, 
  circle1: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 255, 255, 0.5)', // 투명도 있는 흰색
    top: 0, // 동그라미를 원하는 위치로 조정
    left: 0, // 동그라미를 원하는 위치로 조정
  },
  circle2: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // 투명도 있는 흰색
    top: 0, // 동그라미를 원하는 위치로 조정
    left: 0, // 동그라미를 원하는 위치로 조정
  },
  circle3: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // 투명도 있는 흰색
    top: 0, // 동그라미를 원하는 위치로 조정
    left: 25, // 동그라미를 원하는 위치로 조정
  },
  circle4: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 255, 255, 0.5)', // 투명도 있는 흰색
    top: 25, // 동그라미를 원하는 위치로 조정
    left: 50, // 동그라미를 원하는 위치로 조정
  },
  circle5: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 255, 255, 0.5)', // 투명도 있는 흰색
    top: 24, // 동그라미를 원하는 위치로 조정
    left: 36, // 동그라미를 원하는 위치로 조정
  },
  circle6: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // 투명도 있는 흰색
    top: 0, // 동그라미를 원하는 위치로 조정
    left: 0, // 동그라미를 원하는 위치로 조정
  },
  circle7: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 255, 255, 0.5)', // 투명도 있는 흰색
    top: 22, // 동그라미를 원하는 위치로 조정
    left: 30, // 동그라미를 원하는 위치로 조정
  },
  circle8: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // 투명도 있는 흰색
    top: 0, // 동그라미를 원하는 위치로 조정
    left: 0, // 동그라미를 원하는 위치로 조정
  },
  circle9: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 255, 255, 0.5)', // 투명도 있는 흰색
    top: 25, // 동그라미를 원하는 위치로 조정
    left: 7, // 동그라미를 원하는 위치로 조정
  },
  circle10: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 투명도 있는 흰색
    top: 7, // 동그라미를 원하는 위치로 조정
    left: 45, // 동그라미를 원하는 위치로 조정
  },
  circle11: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // 투명도 있는 흰색
    top: 25, // 동그라미를 원하는 위치로 조정
    left: 60, // 동그라미를 원하는 위치로 조정
  },
  // 나머지 그룹들의 스타일 정의
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bottomText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default MapScreen;
