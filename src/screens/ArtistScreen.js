/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as Animatable from 'react-native-animatable';
import React from 'react';
import {
  Text,
  Image,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import { useRef } from 'react';
import NewsItem from '../components/NewsItem';
import { useEffect, useCallback, useState } from 'react';

// import * as data from '../utils/news.json';
import { Theme } from '../styles/theme/ThemeStyle';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import axios from 'axios';

const MIN_HEIGHT = StatusBar.currentHeight + 50;
const MAX_HEIGHT = 180;

const ArtistScreen = ({ route }) => {
  const navTitleView = useRef(null);
  const artistData = route.params.artist;

  const baseUrl = 'https://mewsapp.me';
  const [data, setData] = useState([]);
  const dataLoadLimit = 100;
  const [startAfter, setStartAfter] = useState('');
  const fetchNews = useCallback(async () => {
    let url = `${baseUrl}/api/news/${artistData.id}?limit=${dataLoadLimit}`;
    if (startAfter) {
      url += `&startAfter=${startAfter}`;
    }
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setData(response.data.news);
        setStartAfter(response.data.startAfter);
        console.log('loaded news');
      }
    } catch (error) {
      console.log(error);
    }
  }, [artistData.id, dataLoadLimit, startAfter]);
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const renderNewsItem = ({ item }) => {
    return <NewsItem newsData={item} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: Theme.colors.gray }}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.8}
        minOverlayOpacity={0.4}
        fadeOutForeground
        renderHeader={() => (
          <Image
            source={{ uri: artistData.image }}
            style={{
              height: MAX_HEIGHT,
              width: Dimensions.get('window').width,
            }}
          />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{artistData.name}</Text>
            <Text style={styles.imageSubtitle}>
              {artistData.followers} followers
            </Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{artistData.name}</Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onBeginHidden={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>
          {data
            ? data.map(item => {
                return <NewsItem newsData={item} />;
              })
            : null}
        </TriggeringView>
      </HeaderImageScrollView>
    </View>
  );
};

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
    borderBottomWidth: 0,
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
  imageSubtitle: {
    color: 'white',
    fontSize: 13,
  },
});

export default ArtistScreen;
