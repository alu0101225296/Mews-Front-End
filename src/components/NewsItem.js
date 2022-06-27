import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { Theme } from '../styles/theme/ThemeStyle';
import { useNavigation } from '@react-navigation/native';

const NewsItem = ({ newsData }) => {
  const navigation = useNavigation();
  const url = newsData.sourceLink;
  return (
    <Pressable
      style={styles.item}
      onPress={() => {
        navigation.navigate('WebViewSearch', { url: url });
      }}>
      <Text style={styles.titleText}>{newsData.title}</Text>
      <Text style={styles.descText}>{newsData.body}</Text>
      <Text style={styles.timeText}>
        {new Date(newsData.date._seconds * 1000).toLocaleString()}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Theme.colors.white,
    alignItems: 'flex-start',
    borderBottomColor: Theme.colors.gray,
    borderBottomWidth: 1,
    margin: Theme.sizes.margin.medium,
  },
  itemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: Theme.fonts.size.medium,
    fontWeight: 'bold',
    color: Theme.colors.black,
  },
  descText: {
    fontSize: Theme.fonts.size.small,
    color: Theme.colors.black,
  },
  timeText: {
    fontSize: Theme.fonts.size.small,
    color: Theme.colors.gray,
  },
});

export default NewsItem;
