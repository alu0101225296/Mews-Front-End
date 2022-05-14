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
import * as data from '../utils/artist.json';
import ArtistItem from '../components/ArtistItem';
import { Theme } from '../styles/theme/ThemeStyle';
import { Button } from 'react-native-vector-icons/Feather';

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
    return (
      <ArtistItem
        artistData={item}
        cancelFollowHandler={toggleModal}
        pressArtistHandler={goToArtist}
        isFollowing={item.follow}
      />
    );
  };

  const [searchText, setSearchText] = useState('');
  const DATA = data.artistList;

  let filteredData = !!searchText
    ? DATA.filter(artist => {
        return artist.name.toLowerCase().includes(searchText.toLowerCase());
      })
    : [];

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        style={styles.SearchBar}
      />
      {/* <Button onPress={() => hideHeader()}>
                hola
            </Button> */}
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
