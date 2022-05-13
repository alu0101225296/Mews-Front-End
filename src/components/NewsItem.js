import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { Theme } from '../styles/theme/ThemeStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NewsItem = ({ newsData }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.titleText}>{newsData.title}</Text>
      </View>
      <Text>{newsData.desc}</Text>
      <Text>{newsData.time}</Text>
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
});

export default NewsItem;
