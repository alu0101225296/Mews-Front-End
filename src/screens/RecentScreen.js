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
  RefreshControl,
  FlatList,
} from 'react-native';
import { Theme } from '../styles/theme/ThemeStyle';
// import * as data from '../utils/news.json';
import RecentNewsItem from '../components/RecentNewsITem';

import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { auth } from '../auth/Firebase';

const RecentScreen = () => {
  const uid = auth.currentUser.uid;
  const baseUrl = 'https://mewsapp.me';
  const [data, setData] = useState([]);
  const fetchRecentNews = useCallback(async () => {
    const url = `${baseUrl}/api/news/recent?uid=${uid}`;
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [uid]);
  useEffect(() => {
    fetchRecentNews();
  }, [fetchRecentNews]);

  const renderNewsItem = ({ item }) => {
    return <RecentNewsItem newsData={item} />;
  };

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    fetchRecentNews().then(() => {
      setRefreshing(false);
    });
  };

  return (
    <View style={Style.mainStyle}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <FlatList
        data={data}
        renderItem={renderNewsItem}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
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
