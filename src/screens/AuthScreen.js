import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../auth/Firebase.js';
import { Theme } from '../styles/theme/ThemeStyle';
import { StatusBar, Image } from 'react-native';
import axios from 'axios';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        const userId = user.uid;
        const userJSON = {
          uid: userId,
          subscription: [],
        };
        axios
          .post(`https://mewsapp.me/api/user/${userId}`, userJSON)
          .then(response =>
            console.log('User created successfully', response.data),
          );
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container} behavior="padding">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Welcome to Mews</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor={Theme.colors.gray}
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={Theme.colors.gray}
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleRegister}
              style={[styles.button, { backgroundColor: Theme.colors.gray }]}>
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.mainlight,
  },
  logo: {
    flex: 1,
    width: '80%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: Theme.colors.white,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    width: '80%',
  },
  input: {
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.sizes.padding.medium,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    color: Theme.colors.black,
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: Theme.colors.backgroundColor,
    width: '40%',
    padding: Theme.sizes.padding.small,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: Theme.colors.black,
    fontWeight: '700',
    fontSize: Theme.fonts.size.large,
  },
  buttonOutlineText: {
    color: Theme.colors.white,
    fontWeight: '700',
    fontSize: Theme.fonts.size.large,
  },
});
