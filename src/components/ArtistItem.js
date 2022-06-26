import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import { Theme } from '../styles/theme/ThemeStyle';

const ArtistItem = ({
  artistData,
  cancelFollowHandler,
  pressArtistHandler,
  isFollowing,
}) => {
  return (
    <Pressable onPress={() => pressArtistHandler(artistData)}>
      <View style={styles.item}>
        <Image source={{ uri: artistData.image }} style={styles.image} />
        <View style={styles.rightSide}>
          <Text style={styles.artistNameText}>{artistData.name}</Text>
          {isFollowing ? (
            <Button
              title="Unfollow"
              color={Theme.colors.red}
              onPress={() =>
                Alert.alert(
                  'Unfollow',
                  'Do you want to unfollow ' + artistData.name + '?',
                  [
                    { text: 'No' },
                    { text: 'Yes', onPress: () => cancelFollowHandler },
                  ],
                )
              }
            />
          ) : (
            <Button
              title="Follow"
              color={Theme.colors.red}
              onPress={() => ''}
            />
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Theme.colors.white,
    marginVertical: Theme.sizes.margin.small / 2,
    marginHorizontal: Theme.sizes.margin.medium,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Theme.borderRadius.small,
    height: 60,
  },
  image: {
    width: '30%',
    height: '100%',
    borderTopLeftRadius: Theme.borderRadius.small,
    borderBottomLeftRadius: Theme.borderRadius.small,
  },
  rightSide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: Theme.sizes.margin.medium,
    marginRight: Theme.sizes.margin.medium,
  },
  artistNameText: {
    fontSize: Theme.fonts.size.medium,
    fontWeight: 'bold',
    color: Theme.colors.black,
  },
});

export default ArtistItem;
