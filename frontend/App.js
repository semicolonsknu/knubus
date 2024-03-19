import React from 'react'
import { View } from 'react-native'
import Navbar from './src/components/Navbar'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import HomePage from './src/pages/HomePage'
import RoadMapPage from './src/pages/RoadMapPage'
import TimeTablePage from './src/pages/TimeTablePage'

const App = () => {
  return (
    <View>
      <Navbar />
      <Header />
      <HomePage />
      <RoadMapPage />
      <TimeTablePage />
      <Footer />
    </View>
  )
}

export default App
