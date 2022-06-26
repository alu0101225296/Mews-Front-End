/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useState } from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Button,
  StatusBar,
} from 'react-native';
import { Theme } from '../styles/theme/ThemeStyle';

// import * as data from '../utils/artist.json';
import ArtistItem from '../components/ArtistItem';
import UnfollowPopUp from '../components/UnfollowPopUp';
import SearchBar from '../components/SearchBar';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import axios from 'axios';
import { useEffect } from 'react';
import { auth } from '../auth/Firebase';

const FollowingScreen = ({ navigation }) => {
  const uid = auth.currentUser.uid;
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const goToArtist = artist => {
    navigation.navigate('ArtistFollowing', { artist });
  };

  const renderArtistItem = ({ item }) => {
    return <ArtistItem artistData={item} pressArtistHandler={goToArtist} />;
  };

  const baseUrl = 'https://mewsapp.me';
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `${baseUrl}/api/artist/subbed?uid${uid}`;
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

  let filteredData = [];
  if (data.length > 0) {
    filteredData = searchText
      ? data.filter(artist => {
          return artist.name.toLowerCase().includes(searchText.toLowerCase());
        })
      : data;
  }
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" />
      {data.length !== 0 ? (
        <>
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
        </>
      ) : (
        <Text style={styles.emptyList}>No artist following</Text>
      )}
      <UnfollowPopUp
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </View>
  );
};
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.backgroundColor,
  },
  emptyList: {
    color: Theme.colors.gray,
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  SearchBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 15,
  },
});

export default FollowingScreen;
