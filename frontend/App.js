import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Navbar from './src/components/Navbar'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import HomePage from './src/pages/HomePage'
import RoadMapPage from './src/pages/RoadMapPage'
import TimeTablePage from './src/pages/TimeTablePage'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>------------- Header 영역 -------------</Text>
        <Header />
      </View>

      <View style={styles.section}>
        <Text>------------- Navbar 영역 -------------</Text>
        <Navbar />
      </View>

      <View style={styles.section}>
        <Text>------------- Page 영역 -------------</Text>
        <View style={styles.subSection}>
          <Text>--- HomePage 영역 ---</Text>
          <HomePage />
        </View>

        <View style={styles.subSection}>
          <Text>--- RoadMapPage 영역 ---</Text>
          <RoadMapPage />
        </View>

        <View style={styles.subSection}>
          <Text>--- TimeTablePage 영역 ---</Text>
          <TimeTablePage />
        </View>
      </View>

      <View style={styles.section}>
        <Text>------------- Footer 영역 -------------</Text>
        <Footer />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    borderColor: 'red',
    borderWidth: 5,
    margin: 5,
    padding: 5,
    width: '90%',
  },
  subSection: {
    borderColor: 'blue',
    borderWidth: 3,
    margin: 5,
    padding: 5,
    width: '90%',
  },
})

export default App
