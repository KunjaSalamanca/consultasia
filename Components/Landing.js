import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Landing = ({ onSwitch }) => (
  <View style={styles.container}>
    <View style={styles.header}>
    <Image
        source={require('../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain" 
      />
    <Text variant="headlineMedium" style={styles.loginText}>Hello there!</Text>
    </View>
    <Button mode="contained" style={styles.button} onPress={onSwitch} labelStyle={styles.buttonText}>
        Let's get started!
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFCD7'
  },
  header: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 150
  },
  logo: {
    width: 285, 
    height: 189,
    justifyContent: 'center',
    marginBottom: 20
  },
  loginText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 20
  },
  button: {
    marginBottom: 16,
    width: 180, 
    alignSelf: 'center',
    backgroundColor: '#EADDCA'
  },
  buttonText: {
    color: '#000', 
  },

});

export default Landing;