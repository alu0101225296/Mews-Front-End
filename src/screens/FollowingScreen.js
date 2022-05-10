/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useState } from 'react';
import { FlatList, Text, StyleSheet, View, Button } from 'react-native';
import { COLORS } from '../styles/theme/Colors';

import * as data from '../utils/artist.json';
import FollowingArtistItem from '../components/FollowingArtistItem';
import UnfollowPopUp from '../components/UnfollowPopUp';

import SearchBar from '../components/SearchBar';

const FollowingScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const goToArtist = () => {
        navigation.navigate('Artist');
    }

    const renderArtistItem = ({ item }) => {
        return (
            <FollowingArtistItem
                artistData={item}
                cancelFollowHandler={toggleModal}
                pressArtistHandler={goToArtist}
            />
        );
    };

    const DATA = data.artistList;

    let filteredData = [];
    if (DATA.length > 0) {
        filteredData = (!!searchText) ?
            DATA.filter(artist => {
                return artist.name.toLowerCase().includes(searchText.toLowerCase());
            })
            : DATA;
    }

    return (
        <View style={{ flex: 1 }}>

            {(DATA.length !== 0) ?
                <>
                    <SearchBar
                        searchText={searchText}
                        setSearchText={setSearchText}
                        style={styles.SearchBar}
                    />
                    <FlatList
                        data={filteredData}
                        renderItem={renderArtistItem}
                        keyExtractor={(item => item.name)}
                    />
                </> :
                <Text style={styles.emptyList}>No artist following</Text>
            }
            <UnfollowPopUp
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
            />
        </View >
    );
}
// 
const styles = StyleSheet.create({
    emptyList: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    SearchBar: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        margin: 15,
    }
});

export default FollowingScreen;