import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Header from './src/components/Header' // Adjust the path as necessary
import Navigation from './src/Navigation'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <Navigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
