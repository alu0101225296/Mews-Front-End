import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { Theme } from '../styles/theme/ThemeStyle';

const NewsItem = ({ newsData }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.titleText}>{newsData.title}</Text>
      </View>
      <Text style={styles.descText}>{newsData.desc}</Text>
      <Text style={styles.timeText}>{newsData.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    borderBottomColor: Theme.colors.gray,
    borderBottomWidth: 1,
    margin: Theme.sizes.margin.small,
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
