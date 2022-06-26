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

import * as data from '../utils/artist.json';
import ArtistItem from '../components/ArtistItem';
import UnfollowPopUp from '../components/UnfollowPopUp';
import SearchBar from '../components/SearchBar';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

const FollowingScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const goToArtist = artist => {
    navigation.navigate('ArtistFollowing', { artist });
  };

  const renderArtistItem = ({ item }) => {
    return (
      <ArtistItem
        artistData={item}
        cancelFollowHandler={toggleModal}
        pressArtistHandler={goToArtist}
        isFollowing={item.follow}
      />
    );
  };

  const DATA = data.artistList.filter(item => {
    return item.follow;
  });

  let filteredData = [];
  if (DATA.length > 0) {
    filteredData = searchText
      ? DATA.filter(artist => {
          return artist.name.toLowerCase().includes(searchText.toLowerCase());
        })
      : DATA;
  }
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" />
      {DATA.length !== 0 ? (
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
