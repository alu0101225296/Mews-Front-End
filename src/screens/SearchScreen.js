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
import SearchArtistItem from '../components/SearchArtistItem';
import { COLORS } from '../styles/theme/Colors';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import { Button } from 'react-native-vector-icons/Feather';

const SearchScreen = ({ navigation }) => {
  const hideHeader = () => {
    navigation.setOptions({ headerShown: false });
  };

  // const navigation = useNavigation();

  // useEffect(() => {
  //     navigation.setOptions({
  //         headerRight: () => {
  //             <SearchBar />
  //         },
  //     });
  // }, [navigation]);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const goToArtist = () => {
    console.log('hola');
  };

  const renderArtistItem = ({ item }) => {
    return (
      <SearchArtistItem
        artistData={item}
        cancelFollowHandler={toggleModal}
        pressArtistHandler={goToArtist}
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
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
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
