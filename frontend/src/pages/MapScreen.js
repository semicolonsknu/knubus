import React from 'react';
import { View, Dimensions, TouchableOpacity, Image, Modal, StyleSheet, PanResponder  } from 'react-native';

// 화면의 너비와 높이를 구합니다.
const { width, height } = Dimensions.get('window');

const MapScreen = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupImage, setPopupImage] = React.useState(null);

  // Group1.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup1Press = () => {
    setPopupImage(require('../../assets/public/Logo.png'));
    setShowPopup(true);
  };

  // Group2.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup2Press = () => {
    setPopupImage(require('../../assets/public/Logo.png'));
    setShowPopup(true);
  };

  // Group3.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup3Press = () => {
      setPopupImage(require('../../assets/public/Logo.png'));
      setShowPopup(true);
  };

  // Group4.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup4Press = () => {
      setPopupImage(require('../../assets/public/Logo.png'));
      setShowPopup(true);
  };
    
  // Group5.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup5Press = () => {
      setPopupImage(require('../../assets/public/Logo.png'));
      setShowPopup(true);
  };
    
  // Group6.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup6Press = () => {
    setPopupImage(require('../../assets/public/Logo.png'));
    setShowPopup(true);
  };
    
  // Group7.png를 눌렀을 때 팝업을 표시합니다.
  const handleGroup7Press = () => {
    setPopupImage(require('../../assets/public/Logo.png'));
    setShowPopup(true);
  };

  // Group8.png를 눌렀을 때 팝업을 표시합니다.
    const handleGroup8Press = () => {
    setPopupImage(require('../../assets/public/Logo.png'));
    setShowPopup(true);
  };

  // Group9.png를 눌렀을 때 팝업을 표시합니다.
    const handleGroup9Press = () => {
    setPopupImage(require('../../assets/public/Logo.png'));
    setShowPopup(true);
  };

  // Group10.png를 눌렀을 때 팝업을 표시합니다.
    const handleGroup10Press = () => {
    setPopupImage(require('../../assets/public/Logo.png'));
    setShowPopup(true);
  };

  // Group11.png를 눌렀을 때 팝업을 표시합니다.
    const handleGroup11Press = () => {
    setPopupImage(require('../../assets/public/Logo.png'));
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
        style={{ position: 'absolute', top: 397, left: 307, zIndex: 1 }}
        onPress={handleGroup1Press}
      >
        <Image source={require('../../assets/public/Group1.png')} />
      </TouchableOpacity>

      {/* Group2.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 301, left: 306, zIndex: 1 }}
        onPress={handleGroup2Press}
      >
        <Image source={require('../../assets/public/Group2.png')} />
      </TouchableOpacity>

      {/* Group3.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 148, left: 306, zIndex: 1 }}
        onPress={handleGroup3Press}
      >
        <Image source={require('../../assets/public/Group3.png')} />
      </TouchableOpacity>

      {/* Group4.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 149, left: 160, zIndex: 1 }}
        onPress={handleGroup4Press}
      >
        <Image source={require('../../assets/public/Group4.png')} />
      </TouchableOpacity>

      {/* Group5.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 304, left: 9, zIndex: 1 }}
        onPress={handleGroup5Press}
      >
        <Image source={require('../../assets/public/Group5.png')} />
      </TouchableOpacity>

      
      {/* Group6.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 402, left: 9, zIndex: 1 }}
        onPress={handleGroup6Press}
      >
        <Image source={require('../../assets/public/Group6.png')} />
      </TouchableOpacity>

      {/* Group7.png 이미지 */}
          <TouchableOpacity
        style={{ position: 'absolute', top: 363, left: 56, zIndex: 1 }}
        onPress={handleGroup7Press}
      >
        <Image source={require('../../assets/public/Group7.png')} />
      </TouchableOpacity>

      
      {/* Group8.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 192, left: 189, zIndex: 1 }}
        onPress={handleGroup8Press}
      >
        <Image source={require('../../assets/public/Group8.png')} />
      </TouchableOpacity>

       
      {/* Group9.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 190, left: 259, zIndex: 1 }}
        onPress={handleGroup9Press}
      >
        <Image source={require('../../assets/public/Group9.png')} />
      </TouchableOpacity>

      {/* Group10.png 이미지 */}
        <TouchableOpacity
        style={{ position: 'absolute', top: 349, left: 259, zIndex: 1 }}
        onPress={handleGroup10Press}
      >
        <Image source={require('../../assets/public/Group10.png')} />
      </TouchableOpacity>

      {/* Group11.png 이미지 */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 408, left: 259, zIndex: 1 }}
        onPress={handleGroup11Press}
      >
        <Image source={require('../../assets/public/Group11.png')} />
      </TouchableOpacity>





      {/* 지도 이미지 */}
      <Image
        source={require('../../assets/public/Map.png')}
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
      />

      {/* 팝업 모달 */}
      <Modal
        visible={showPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={closePopup}
      >
        <View style={styles.modalContainer}>
         {/* 팝업 이미지 */}
         {popupImage && (
            <Image
              source={popupImage}
              style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            />
          )}
          {/* 팝업 닫기 버튼 */}
          <TouchableOpacity style={styles.closeButton} onPress={closePopup}>
            <Image source={require('../../assets/public/Logo.png')} />
          </TouchableOpacity>
        </View>
      </Modal>
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
});

export default MapScreen;
