import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Image, Modal, Animated, StyleSheet, Text } from 'react-native';

// 화면의 너비와 높이를 구합니다.
const { width, height } = Dimensions.get('window');

const MapScreen = () => {
  const [animation] = React.useState(new Animated.Value(0)); // 애니메이션 값
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupImage, setPopupImage] = React.useState(null);
  const [isClicked, setIsClicked] = React.useState(false);
  const [selectedGroup, setSelectedGroup] = React.useState(null);
  

  // 뷰를 눌렀을 때 팝업을 표시하도록 수정
  const handleGroupPress = (image,group) => {
    if (showPopup && popupImage === image) {
      setShowPopup(false);
      setShowPopupImage(null);
    } else {
      setIsClicked(true);
      setPopupImage(image);
      setSelectedGroup(group);
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
    setSelectedGroup(null); // 선택된 그룹 초기화
  };

  return (
  <View style={{ flex: 1, width: width, height: height }}>
  {/* 미도1.png 이미지 */}
  <TouchableOpacity
  style={{ ...styles.group1, position: 'absolute', top: 379, left: 249, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/미도1.jpg'),'group1')}
>
  {/* 작은 동그라미 */}
  <Animated.View
  style={{
    ...styles.circle1,
    opacity: animation.interpolate ({
      inputRange: [0,1],
      outputRange: selectedGroup === 'group1' ? [0, 1] : [0, 0], 
      // 선택된 그룹에만 동그라미가 보이도록 함
    }),
    // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
  style={{ ...styles.group2, position: 'absolute', top: 310, left: 278, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/의생대1.jpg'),'group2')}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle2,
      opacity: animation.interpolate({
        inputRange: [0,1],
        outputRange: selectedGroup === 'group2' ? [0, 1] : [0, 0], 
        // 선택된 그룹에만 동그라미가 보이도록 함

      }), // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
  style={{ ...styles.group3, position: 'absolute', top: 259, left: 175, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/경영1.jpg'),'group3')}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle3,
      opacity: animation.interpolate({
        inputRange: [0,1],
        outputRange: selectedGroup === 'group3' ? [0, 1] : [0, 0], 
        // 선택된 그룹에만 동그라미가 보이도록 함
      }), // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
  style={{ ...styles.group4, position: 'absolute', top: 204, left: 60, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/미광1.jpg'),'group4')}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle4,
      opacity: animation.interpolate({
        inputRange: [0,1],
        outputRange: selectedGroup === 'group4' ? [0, 1] : [0, 0], 
        // 선택된 그룹에만 동그라미가 보이도록 함
      }), // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
  style={{ ...styles.group5, position: 'absolute', top: 268, left: 20, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/백록관1.jpg'),'group5')}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle5,
      opacity: animation.interpolate({
        inputRange: [0,1],
        outputRange: selectedGroup === 'group5' ? [0, 1] : [0, 0], 
        // 선택된 그룹에만 동그라미가 보이도록 함
      }), // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
  style={{ ...styles.group6, position: 'absolute', top: 298, left: 62, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/함인섭1.jpg'),'group6')}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle6,
      opacity: animation.interpolate({
        inputRange: [0,1],
        outputRange: selectedGroup === 'group6' ? [0, 1] : [0, 0], 
          // 선택된 그룹에만 동그라미가 보이도록 함
      }), // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
  style={{ ...styles.group7, position: 'absolute', top: 283, left: 237, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/동생대1.jpg'),'group7')}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle7,
      opacity: animation.interpolate({
        inputRange: [0,1],
        outputRange: selectedGroup === 'group7' ? [0, 1] : [0, 0], 
        // 선택된 그룹에만 동그라미가 보이도록 함
      }), // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
  style={{ ...styles.group8, position: 'absolute', top: 233, left: 114, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/미광2.jpg'),'group8')}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle8,
      opacity: animation.interpolate({
        inputRange: [0,1],
        outputRange: selectedGroup === 'group8' ? [0, 1] : [0, 0], 
        // 선택된 그룹에만 동그라미가 보이도록 함
      }), // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
  style={{ ...styles.group9, position: 'absolute', top: 230, left: 198, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/경영2.jpg'),'group9')}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle9,
      opacity: animation.interpolate({
        inputRange: [0,1],
        outputRange: selectedGroup === 'group9' ? [0, 1] : [0, 0], 
          // 선택된 그룹에만 동그라미가 보이도록 함
      }), // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
  style={{ ...styles.group10, position: 'absolute', top: 350, left: 20, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/기숙사1.jpg'),'group10')}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle10,
      opacity: animation.interpolate({
        inputRange: [0,1],
        outputRange: selectedGroup === 'group10' ? [0, 1] : [0, 0], 
        // 선택된 그룹에만 동그라미가 보이도록 함
      }), // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
  style={{ ...styles.group11, position: 'absolute', top: 349, left: 190, zIndex: 1 }}
  onPress={() => handleGroupPress(require('../../assets/public/미도2.jpg'),'group11')}
>
  {/* 작은 동그라미 */}
  <Animated.View
    style={{
      ...styles.circle11,
      opacity: animation.interpolate({
        inputRange: [0,1],
        outputRange: selectedGroup === 'group11' ? [0, 1] : [0, 0], 
        // 선택된 그룹에만 동그라미가 보이도록 함
      }), // 터치하기 전에는 투명도를 0으로 설정하여 동그라미가 보이지 않도록 함
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
    backgroundColor : 'transparent',
  },
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
