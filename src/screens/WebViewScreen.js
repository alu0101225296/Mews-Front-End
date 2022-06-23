import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WebViewScreen = ({ route, navigation }) => {
  const url = route.params.url;
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
