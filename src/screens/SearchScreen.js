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
  FlatList,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
// import * as data from '../utils/artist.json';
import ArtistItem from '../components/ArtistItem';
import { Theme } from '../styles/theme/ThemeStyle';
import { Button } from 'react-native-vector-icons/Feather';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
  const hideHeader = () => {
    navigation.setOptions({ headerShown: false });
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const goToArtist = artist => {
    navigation.navigate('ArtistSearching', { artist });
  };

  const renderArtistItem = ({ item }) => {
    return <ArtistItem artistData={item} pressArtistHandler={goToArtist} />;
  };
  const [searchText, setSearchText] = useState('');

  const baseUrl = 'https://mewsapp.me';
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `${baseUrl}/api/artist`;
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
  }, []);

  let filteredData = searchText
    ? data.filter(artist => {
        return artist.name.toLowerCase().includes(searchText.toLowerCase());
      })
    : [];

  return (
    <View>
      <FocusAwareStatusBar barStyle="dark-content" />
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        style={styles.SearchBar}
      />
      <FlatList
        data={filteredData}
        renderItem={renderArtistItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 15,
  },
});

export default SearchScreen;
