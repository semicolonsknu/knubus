import React from 'react';
import { View, Dimensions, TouchableOpacity, Image, Modal, StyleSheet, Text } from 'react-native';

// 화면의 너비와 높이를 구합니다.
const { width, height } = Dimensions.get('window');

const MapScreen = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupImage, setPopupImage] = React.useState(null);

  // 미도1.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup1Press = () => {
    if (showPopup && popupImage === require('../../assets/public/미도1.jpg')) {
      setShowPopup(false);
      setShowPopupImage(null);
    } else {
      // 새로운 이미지를 표시합니다.
      setPopupImage(require('../../assets/public/미도1.jpg'));
      setShowPopup(true);
    }
  };

  // 동생대1.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup2Press = () => {
    setPopupImage(require('../../assets/public/의생대1.jpg'));
    setShowPopup(true);
  };

  // 경영1.jpg를 눌렀을 때 팝업을 표시합니다.
  const handleGroup3Press = () => {
    setPopupImage(require('../../assets/public/경영1.jpg'));
    setShowPopup(true);
  };

  // 미광1.jpg를 눌렀을 때 팝업을 표시합니다.
  const handleGroup4Press = () => {
    setPopupImage(require('../../assets/public/미광1.jpg'));
    setShowPopup(true);
  };

  // 백록관1.jpg를 눌렀을 때 팝업을 표시합니다.
  const handleGroup5Press = () => {
    setPopupImage(require('../../assets/public/백록관1.jpg'));
    setShowPopup(true);
  };

  // 함인섭1.jpg를 눌렀을 때 팝업을 표시합니다.
  const handleGroup6Press = () => {
    setPopupImage(require('../../assets/public/함인섭1.jpg'));
    setShowPopup(true);
  };

  // 동생대1.jpg를 눌렀을 때 팝업을 표시합니다.
  const handleGroup7Press = () => {
    setPopupImage(require('../../assets/public/동생대1.jpg'));
    setShowPopup(true);
  };

  // 미광2.jpg를 눌렀을 때 팝업을 표시합니다.
  const handleGroup8Press = () => {
    setPopupImage(require('../../assets/public/미광2.jpg'));
    setShowPopup(true);
  };

  // 경영2.jpg를 눌렀을 때 팝업을 표시합니다.
  const handleGroup9Press = () => {
    setPopupImage(require('../../assets/public/경영2.jpg'));
    setShowPopup(true);
  };

  // 기숙사1.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup10Press = () => {
    setPopupImage(require('../../assets/public/기숙사1.jpg'));
    setShowPopup(true);
  };

  // 미도2.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup11Press = () => {
    setPopupImage(require('../../assets/public/미도2.jpg'));
    setShowPopup(true);
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
        onPress={handleGroup1Press}
      >
      </TouchableOpacity>


      {/* Group2.png 이미지 */}
      <TouchableOpacity
        style={{ ...styles.group2, position: 'absolute', top: 305, left: 278, zIndex: 1 }}
        onPress={handleGroup2Press}
      >
      </TouchableOpacity>

      {/* Group3.png 이미지 */}
      <TouchableOpacity
        style={{...styles.group3, position: 'absolute', top: 259, left: 175, zIndex: 1 }}
        onPress={handleGroup3Press}
      >
      </TouchableOpacity>

      {/* Group4.png 이미지 */}
      <TouchableOpacity
        style={{ ...styles.group4,position: 'absolute', top: 204, left: 60, zIndex: 1 }}
        onPress={handleGroup4Press}
      >
      </TouchableOpacity>

      {/* Group5.png 이미지 */}
      <TouchableOpacity
        style={{ ...styles.group5, position: 'absolute', top: 268, left: 20, zIndex: 1 }}
        onPress={handleGroup5Press}
      >
      </TouchableOpacity>


      {/* Group6.png 이미지 */}
      <TouchableOpacity
        style={{ ...styles.group6,position: 'absolute', top: 298, left: 62, zIndex: 1 }}
        onPress={handleGroup6Press}
      >
      </TouchableOpacity>

      {/* Group7.png 이미지 */}
      <TouchableOpacity
        style={{ ...styles.group7,position: 'absolute', top: 283, left: 237, zIndex: 1 }}
        onPress={handleGroup7Press}
      >
      </TouchableOpacity>

      {/* Group8.png 이미지 */}
      <TouchableOpacity
        style={{ ...styles.group8,position: 'absolute', top: 233, left: 114, zIndex: 1 }}
        onPress={handleGroup8Press}
      >
      </TouchableOpacity>

      {/* Group9.png 이미지 */}
      <TouchableOpacity
        style={{ ...styles.group9,position: 'absolute', top: 230, left: 198, zIndex: 1 }}
        onPress={handleGroup9Press}
      >
      </TouchableOpacity>

      {/* Group10.png 이미지 */}
      <TouchableOpacity
        style={{ ...styles.group10 , position: 'absolute', top: 350, left: 20, zIndex: 1 }}
        onPress={handleGroup10Press}
      >
      </TouchableOpacity>

      {/* Group11.png 이미지 */}
      <TouchableOpacity
        style={{...styles.group11, position: 'absolute', top: 349, left: 190, zIndex: 1 }}
        onPress={handleGroup11Press}
      >
      </TouchableOpacity>

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
    borderWidth: 1,
    borderColor: 'black',
  },
  group2: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  group3: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  group4: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  group5: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  group6: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  group7: {
    width: 40,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  group8: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  group9: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  group10: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  group11: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },

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