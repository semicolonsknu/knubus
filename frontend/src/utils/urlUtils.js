import { Linking, Alert } from 'react-native'

// URL 열기 함수
export const openURL = async (url) => {
  try {
    const supported = await Linking.canOpenURL(url)
    if (supported) {
      await Linking.openURL(url)
    } else {
      throw new Error(`지원되지 않는 URL입니다: ${url}`)
    }
  } catch (error) {
    Alert.alert('URL 열기 실패', 'URL을 열 수 없습니다.', [
      { text: '확인', style: 'cancel' },
    ])
    console.error('Failed to open URL', error)
  }
}
