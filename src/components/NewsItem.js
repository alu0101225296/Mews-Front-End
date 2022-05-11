import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { COLORS } from '../styles/theme/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NewsItem = ({ newData }) => {
  return (
    <View style={styles.item}>
      {/* <View>
        <View>
          <Text>aaa</Text>
        </View>
        <View>
          <Text>aa</Text>
        </View>
      </View>
      <View>
        <Text>aa</Text>
      </View> */}
      <Text> aa </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-evenly',
    height: 150,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
});

export default NewsItem;
