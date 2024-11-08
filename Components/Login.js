import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Login = ({ onSwitch }) => (
  <View style={styles.container}>
    <View style={styles.header}>
    <Image
        source={require('../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain" 
      />
    </View>
    <View style={styles.container2}>
    <Text variant="headlineMedium" style={styles.loginText}>Sign In</Text>
    <TextInput 
      label="Email" 
      mode="outlined" 
      style={styles.input} 
    />
    <TextInput 
      label="Password" 
      mode="outlined" 
      secureTextEntry 
      style={styles.input} 
    />
    <Button mode="contained" style={styles.button} onPress={() => {}} labelStyle={styles.buttonText}>
      Login
    </Button>
    <Button mode="text" onPress={onSwitch} labelStyle={styles.buttonText}>
      Create Account
    </Button>
    </View>
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
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 25,
    width: '100%',
    height: '40%',
    backgroundColor: '#EADDCA',
  },
  loginText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    position: 'absolute', 
    top: 50, 
    left: 16,
    zIndex: 1,
  },
  input: {
    top: -20,
    marginBottom: 16,
    width: '95%',
    alignSelf: 'center', 
    borderRadius: 50
  },
  button: {
    marginBottom: 16,
    width: 180, 
    alignSelf: 'center',
    backgroundColor: '#FFFCD7'
  },
  buttonText: {
    color: '#000', 
  },

});

export default Login;