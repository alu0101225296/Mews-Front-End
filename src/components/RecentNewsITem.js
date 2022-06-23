import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { Theme } from '../styles/theme/ThemeStyle';
import { useNavigation } from '@react-navigation/native';

// TODO : añadir newsItem y encima una cabecera en vez de crearlo todo entero aqui
const RecentNewsItem = ({ newsData }) => {
  const navigation = useNavigation();
  const url = newsData.url;
  return (
    <Pressable
      style={styles.item}
      onPress={() => {
        navigation.navigate('WebViewRecent', { url: url });
      }}>
      <View style={styles.artisInfo}>
        <Image
          source={{
            uri: 'https://images2.listindiario.com/imagen/2020/05/16/618/617747/680x460/202005161424071/safaera-de-bad-bunny-vuelve-a-estar-disponible-en-spotify.jpeg',
          }}
          style={styles.image}
        />
        <Text style={styles.artistName}>Bad Bunny</Text>
      </View>
      <View style={styles.news}>
        <View>
          <Text style={styles.titleText}>{newsData.title}</Text>
        </View>
        <Text style={styles.descText}>{newsData.desc}</Text>
        <Text style={styles.timeText}>{newsData.time}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Theme.colors.white,
  },
  artistName: {
    fontSize: Theme.fonts.size.medium,
    fontWeight: 'bold',
    color: Theme.colors.black,
    marginLeft: Theme.sizes.margin.small,
  },
  news: {
    alignItems: 'center',
    borderBottomColor: Theme.colors.gray,
    borderBottomWidth: 1,
    marginLeft: Theme.sizes.margin.small,
    marginRight: Theme.sizes.margin.small,
  },
  artisInfo: {
    flexDirection: 'row',
    marginTop: Theme.sizes.margin.small,
    marginBottom: Theme.sizes.margin.small,
    marginLeft: Theme.sizes.margin.medium,
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
  image: {
    width: 20,
    height: 20,
    borderRadius: Theme.borderRadius.large,
  },
});

export default RecentNewsItem;
