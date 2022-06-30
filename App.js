/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Theme } from './src/styles/theme/ThemeStyle';
import { MenuProvider } from 'react-native-popup-menu';
import RootNavigator from './src/navigation/RootNavigator';
console.disableYellowBox = true;

const YourApp = () => {
  return (
    <MenuProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Theme.colors.white}
          translucent={true}
        />
        <RootNavigator />
      </View>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.backgroundColor,
  },
  simlpeText: {
    color: Theme.colors.black,
  },
});

export default YourApp;
