import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // When an error is caught, update state to render fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Here, you might log the error to an error reporting service like Sentry
    console.error('An error occurred:', error, errorInfo)
    // Save the error details in state for displaying in the UI
    this.setState({ errorInfo })
  }

  // Method to reset the error state and attempt to recover
  handleTryAgain = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI when an error is caught
      return (
        <View style={styles.center}>
          <Text>Something went wrong, please try again.</Text>
          {this.state.error && (
            <Text style={styles.errorText}>
              Error: {this.state.error.toString()}
            </Text>
          )}
          {this.state.errorInfo && (
            <Text style={styles.errorDetails}>
              Details: {this.state.errorInfo.componentStack}
            </Text>
          )}
          <View style={styles.buttonContainer}>
            <Button
              title="Try Again"
              onPress={this.handleTryAgain}
              style={styles.button}
            />
          </View>
        </View>
      )
    }

    // Render children if no error
    return this.props.children
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 5,
    marginRight: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  errorText: {
    color: '#FF5757',
    fontSize: 16,
    marginBottom: 10,
  },
  errorDetails: {
    marginTop: 5,
    fontSize: 12,
    color: '#4A4A4A',
  },
})

export default ErrorBoundary
