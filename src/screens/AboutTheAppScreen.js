/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import { Theme } from '../styles/theme/ThemeStyle';

const AboutTheAppScreen = () => {
  const example = () => {
    return 'ABOUT SCREEN';
  };
  return (
    <View style={Style.mainStyle}>
      <Text>Try editing me!</Text>
      <Button
        color="purple"
        title="testing button"
        onPress={() =>
          Alert.alert('MyTitle', 'MyMessage', [
            { text: 'Ye', onPress: () => console.log('yes') },
            { text: 'Nope', onPress: () => console.log('no') },
          ])
        }
      />
      <ScrollView>
        <Text>Introduce {example()}</Text>
      </ScrollView>
    </View>
  );
};

const Style = {
  // TODO: cambiar a stylesheet
  mainStyle: {
    flex: 1,
  },
};

export default AboutTheAppScreen;
