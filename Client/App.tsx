import React from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import Login from './src/components/Login'; // Adjust the path as needed

function App(): React.JSX.Element {
  const showLogin = true; // Change this to false to show SignUp component

  return (
    <View style={styles.container}>
      {showLogin ? <Login /> : <Text>No component to display</Text>}
      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
