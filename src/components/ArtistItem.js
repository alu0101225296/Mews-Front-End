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
import axios from 'axios';
import { useState, useEffect } from 'react';
import { auth } from '../auth/Firebase';

const ArtistItem = ({ artistData, pressArtistHandler }) => {
  const uid = auth.currentUser.uid;
  const [following, setFollowing] = useState(false);
  const baseUrl = 'https://mewsapp.me';

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/user/${uid}/subs/${artistData.id}`)
      .then(res => setFollowing(res.data.subscribed))
      .catch(err => console.log(err));
  }, [uid, artistData.id]);

  const followArtist = () => {
    axios.put(`${baseUrl}/api/user/${uid}/subs/${artistData.id}`).then(res => {
      setFollowing(true);
      console.log('pressed follow');
    });
  };

  const unfollowArtist = () => {
    axios
      .delete(`${baseUrl}/api/user/${uid}/subs/${artistData.id}`)
      .then(res => {
        setFollowing(false);
        console.log('pressed unfollow');
      });
  };

  return (
    <Pressable onPress={() => pressArtistHandler(artistData)}>
      <View style={styles.item}>
        <Image source={{ uri: artistData.image }} style={styles.image} />
        <View style={styles.rightSide}>
          <View>
            <Text style={styles.artistNameText}>{artistData.name}</Text>
            <Text style={styles.artistFollowers}>
              {artistData.followers} followers
            </Text>
          </View>
          {following ? (
            <Button
              title="Unfollow"
              color={Theme.colors.red}
              onPress={() =>
                Alert.alert(
                  'Unfollow',
                  'Do you want to unfollow ' + artistData.name + '?',
                  [
                    { text: 'No' },
                    { text: 'Yes', onPress: () => unfollowArtist() },
                  ],
                )
              }
            />
          ) : (
            <Button
              title="Follow"
              color={Theme.colors.red}
              onPress={() => followArtist()}
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
  artistFollowers: {
    fontSize: Theme.fonts.size.small,
    color: Theme.colors.grayDark,
  },
});

export default ArtistItem;
