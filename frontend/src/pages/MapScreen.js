import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Image, Modal, Animated, StyleSheet, Text } from 'react-native';

// 화면의 너비와 높이를 구합니다.
const { width, height } = Dimensions.get('window');

const MapScreen = () => {
  const [animation] = React.useState(new Animated.Value(0)); // 애니메이션 값
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupImage, setPopupImage] = React.useState(null);
  const [isClicked, setIsClicked] = React.useState(false);
  

  // 뷰를 눌렀을 때 팝업을 표시하도록 수정
  const handleGroupPress = (image) => {
    if (showPopup && popupImage === image) {
      setShowPopup(false);
      setShowPopupImage(null);
    } else {
      setIsClicked(true);
      setPopupImage(image);
      setShowPopup(true);
  
      // 애니메이션 시작
      Animated.sequence([
        Animated.timing(animation, { toValue: 1, duration: 0, useNativeDriver: false }),
        Animated.timing(animation, { toValue: 0, duration: 500, useNativeDriver: false }),
      ]).start(() => setIsClicked(false)); // 애니메이션 완료 후 클릭 상태 변경
    }
  };
  

  // 팝업을 닫습니다.
  const closePopup = () => {
    setShowPopup(false);
    setPopupImage(null); // 팝업 닫을 때 이미지 초기화
  };

  return (
  <View style={{ flex: 1, width: width, height: height }}>
  {/* Group1.png 이미지 */}
  <TouchableOpacity
  style={{ ...styles.group1, position: 'absolute', top: 379, left: 249, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/미도1.jpg'))}
>
  {/* 작은 동그라미 */}
  <Animated.View
  style={{
    ...styles.circle1,
    opacity: animation, // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 3], // 터치 시 동그라미가 확대되는 애니메이션 효과
        }),
      },
    ],
  }}
/>
</TouchableOpacity>

<TouchableOpacity
  style={{ ...styles.group2, position: 'absolute', top: 255, left: 200, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/경영2.jpg'))}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle2,
      opacity: animation, // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
      transform: [
        {
          scale: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 3], // 터치 시 동그라미가 확대되는 애니메이션 효과
          }),
        },
      ],
    }}
  />
</TouchableOpacity>



      {/* 나머지 그룹들에 대해서도 TouchableOpacity로 감싸고 onPress 이벤트 추가 */}

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
    backgroundColor : 'transparent',
  },
  group2: {
    width: 80,
    height: 30,
    backgroundColor: 'transparent',
  },
  circle1: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 255, 255, 0.5)', // 투명도 있는 흰색
    top: 0, // 동그라미를 원하는 위치로 조정
    left: 5, // 동그라미를 원하는 위치로 조정
  },
  circle2: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 255, 255, 0.5)', // 투명도 있는 흰색
    top: 0, // 동그라미를 원하는 위치로 조정
    left: 5, // 동그라미를 원하는 위치로 조정
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
