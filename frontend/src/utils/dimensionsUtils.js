import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const scale = (size) => (width / 375) * size
