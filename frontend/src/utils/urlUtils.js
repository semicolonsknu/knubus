import { Linking } from 'react-native'

// URL 열기 함수
export const openURL = (url) => {
  Linking.openURL(url).catch((err) => console.error('Failed to open URL', err))
}
