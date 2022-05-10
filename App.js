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

import ArtistScreen from './src/screens/ArtistScreen';

const YourApp = () => {
  return (
    <View
      style={styles.container}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={COLORS.white}
      />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  simlpeText: {
    color: COLORS.black,
  }
});

export default YourApp;