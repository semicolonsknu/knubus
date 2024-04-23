import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'
import Header from './src/components/Header'
import Navigation from './src/Navigation'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <Navigation />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default App
