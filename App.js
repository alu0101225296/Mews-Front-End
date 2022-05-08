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
import { COLORS } from './src/styles/theme/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './src/navigation/TabNavigator';
// import DrawerNavigation from './src/components/DrawerNavigator';

const YourApp = () => {
  return (
    <SafeAreaView
      style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // padding on the top if its android
  },
  simlpeText: {
    color: 'black',
  }
});

export default YourApp;