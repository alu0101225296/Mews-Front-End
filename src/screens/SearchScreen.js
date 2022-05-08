/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, Text, FlatList, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import * as data from '../utils/artist.json';
import SearchArtistItem from '../components/SearchArtistItem';


const SearchScreen = () => {

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
        console.log("hola");
    }

    const renderArtistItem = ({ item }) => {
        return (
            <SearchArtistItem
                artistData={item}
                cancelFollowHandler={toggleModal}
                pressArtistHandler={goToArtist}
            />
        );
    };

    const [searchText, setSearchText] = useState("");
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
        <View>
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
        </View>
    );
}

const styles = StyleSheet.create({
    SearchBar: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        margin: 15,
    }
});

export default SearchScreen;