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
// import * as data from '../utils/news.json';
import RecentNewsItem from '../components/RecentNewsITem';
import { FlatList } from 'react-native-gesture-handler';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { auth } from '../auth/Firebase';

const RecentScreen = () => {
  const uid = auth.currentUser.uid;
  const baseUrl = 'https://mewsapp.me';
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `${baseUrl}/api/news/recent?uid=${uid}`;
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, { cancelToken: source.token });
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
          return;
        } else {
          throw new Error('Failed to fetch artists');
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled');
        } else {
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchUsers();
    return () => source.cancel('Data fetching cancelled');
  }, [uid]);

  const renderNewsItem = ({ item }) => {
    return <RecentNewsItem newsData={item} />;
  };

  return (
    <View style={Style.mainStyle}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <FlatList data={data} renderItem={renderNewsItem} />
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
