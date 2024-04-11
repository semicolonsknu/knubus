import React from 'react';
import { View, Dimensions, TouchableOpacity, Image, Modal, StyleSheet,Text} from 'react-native';

// 화면의 너비와 높이를 구합니다.
const { width, height } = Dimensions.get('window');

const MapScreen = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupImage, setPopupImage] = React.useState(null);

  // 미도1.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup1Press = () => {
    if (showPopup && popupImage === require ('../../assets/public/미도1.jpg')) {
    setShowPopup(false);
    setShowPopupImage(null);
  }else {
  // 새로운 이미지를 표시합니다.
  setPopupImage(require('../../assets/public/미도1.jpg'));
  setShowPopup(true);
  }
};
  
  // 동생대1.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup2Press = () => {
    setPopupImage(require('../../assets/public/동생대1.jpg'));
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
    
  // 기숙사1.jpg를 눌렀을 때 팝업을 표시합니다.
  const handleGroup6Press = () => {
    setPopupImage(require('../../assets/public/기숙사1.jpg'));
    setShowPopup(true);
  };
    
  // 합인섭.jpg를 눌렀을 때 팝업을 표시합니다.
  const handleGroup7Press = () => {
    setPopupImage(require('../../assets/public/함인섭1.jpg'));
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

  // 의생대1.png를 눌렀을 때 팝업을 표시합니다.
    const handleGroup10Press = () => {
    setPopupImage(require('../../assets/public/의생대1.jpg'));
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
        style={{ position: 'absolute', top: 365, left: 270, zIndex: 1 }}
        onPress={handleGroup1Press}
      >
        <Image source={require('../../assets/public/Group1.png')} />
      </TouchableOpacity>

      {/* Group2.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 277, left: 298, zIndex: 1 }}
        onPress={handleGroup2Press}
      >
        <Image source={require('../../assets/public/Group2.png')} />
      </TouchableOpacity>

      {/* Group3.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 229, left: 183, zIndex: 1 }}
        onPress={handleGroup3Press}
      >
        <Image source={require('../../assets/public/Group3.png')} />
      </TouchableOpacity>

      {/* Group4.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 202, left: 98, zIndex: 1 }}
        onPress={handleGroup4Press}
      >
        <Image source={require('../../assets/public/Group4.png')} />
      </TouchableOpacity>

      {/* Group5.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 267, left: 25, zIndex: 1 }}
        onPress={handleGroup5Press}
      >
        <Image source={require('../../assets/public/Group5.png')} />
      </TouchableOpacity>

      
      {/* Group6.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 350, left: 67, zIndex: 1 }}
        onPress={handleGroup6Press}
      >
        <Image source={require('../../assets/public/Group6.png')} />
      </TouchableOpacity>

      {/* Group7.png 이미지 */}
          <TouchableOpacity
        style={{ position: 'absolute', top: 280, left: 61, zIndex: 1 }}
        onPress={handleGroup7Press}
      >
        <Image source={require('../../assets/public/Group7.png')} />
      </TouchableOpacity>

      {/* Group8.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 228, left: 108, zIndex: 1 }}
        onPress={handleGroup8Press}
      >
        <Image source={require('../../assets/public/Group8.png')} />
      </TouchableOpacity>

      {/* Group9.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 252, left: 195, zIndex: 1 }}
        onPress={handleGroup9Press}
      >
        <Image source={require('../../assets/public/Group9.png')} />
      </TouchableOpacity>

      {/* Group10.png 이미지 */}
        <TouchableOpacity
        style={{ position: 'absolute', top: 295, left: 285, zIndex: 1 }}
        onPress={handleGroup10Press}
      >
        <Image source={require('../../assets/public/Group10.png')} />
      </TouchableOpacity>

      {/* Group11.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 350, left: 245, zIndex: 1 }}
        onPress={handleGroup11Press}
      >
        <Image source={require('../../assets/public/Group11.png')} />
      </TouchableOpacity>

      {/* 지도 이미지 */}
      <Image
        source={require('../../assets/public/Map.png')}
        style={{ width: '100%', height: '100%',  alignSelf: 'center', resizeMode: 'contain', marginTop: 'auto', marginBottom : 'auto' }}
      />

      {/* 팝업 모달 */}
      <Modal
        visible={showPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={closePopup}
      >
        <TouchableOpacity style ={{flex:1}} activeOpacity={1} onPress={closePopup}>
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
      <View style = {styles.bottomTextContainer}>
        <Text style = {styles.bottomText}>정류장을 클릭하면 해당 정류장의 이미지가 표시됩니다.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
