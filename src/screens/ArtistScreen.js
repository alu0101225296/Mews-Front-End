/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as Animatable from 'react-native-animatable';
import React from 'react';
import { ScrollView, Text, TextInputBase, View, StatusBar, StyleSheet, Dimensions } from 'react-native';
import ImageHeaderScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { Header } from '@react-navigation/stack';
import { useRef } from 'react';
import NewsItem from '../components/NewsItem';

import { FlatList } from 'react-native-gesture-handler';
import * as data from '../utils/artist.json';
import { COLORS } from '../styles/theme/Colors';

const MIN_HEIGHT = StatusBar.currentHeight + 70;
const MAX_HEIGHT = 180;

const ArtistScreen = () => {
    const navTitleView = useRef(null);
    const DATA = data.artistList;

    const renderNewsItem = ({ item }) => {
        return (
            <NewsItem
                artistData={item}
            />
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <ImageHeaderScrollView
                maxHeight={MAX_HEIGHT}
                minHeight={MIN_HEIGHT}
                maxOverlayOpacity={0.8}
                minOverlayOpacity={0.4}
                fadeOutForeground
                headerImage={require('../assets/images/edsheeran.jpeg')}

                renderForeground={() => (
                    <View style={styles.titleContainer}>
                        <Text style={styles.imageTitle}>Ed Sheeran</Text>
                    </View>
                )}

                renderFixedForeground={() => (
                    <Animatable.View
                        style={styles.navTitleView}
                        ref={navTitleView}
                    >
                        <Text style={styles.navTitle}>
                            Ed Sheeran
                        </Text>
                    </Animatable.View>
                )}
            >
                <TriggeringView
                    style={styles.section}
                    onBeginHidden={() => navTitleView.current.fadeInUp(200)}
                    onDisplay={() => navTitleView.current.fadeOut(100)}
                >

                </TriggeringView>
                <View style={{ backgroundColor: COLORS.gray }}>
                    <FlatList  // TODO: CANT USE FLATLIST I GUESS
                        data={DATA}
                        renderItem={renderNewsItem}
                        keyExtractor={(item => item.name)}
                    />
                </View>
            </ImageHeaderScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
    },
    name: {
        fontWeight: 'bold',
    },
    section: {
        padding: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
    },
    keywords: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    keywordContainer: {
        backgroundColor: '#999999',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    keyword: {
        fontSize: 16,
        color: 'white',
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 30,
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: MIN_HEIGHT / 2,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 20,
        backgroundColor: 'transparent',
    },
    sectionLarge: {
        height: 600,
    },
});

export default ArtistScreen;