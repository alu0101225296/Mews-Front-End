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
  StatusBar,
} from 'react-native';
import { Theme } from '../styles/theme/ThemeStyle';
import * as data from '../utils/news.json';
import NewsItem from '../components/NewsItem';
import { FlatList } from 'react-native-gesture-handler';

const RecentScreen = () => {
  let DATA = data['Bad Bunny'];

  const renderNewsItem = ({ item }) => {
    return <NewsItem newsData={item} />;
  };

  return (
    <View style={Style.mainStyle}>
      <StatusBar barStyle="dark-content" />
      <FlatList data={DATA} renderItem={renderNewsItem} />
    </View>
  );
};

const Style = {
  // TODO: cambiar a stylesheet
  mainStyle: {
    flex: 1,
  },
};

export default RecentScreen;
