import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { COLORS } from '../styles/theme/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FollowingArtistItem = ({ artistData, cancelFollowHandler, pressArtistHandler }) => {
    return (
        <Pressable onPress={pressArtistHandler}>
            <View style={styles.item}>
                <Image
                    source={{ uri: artistData.image }}
                    style={{ width: 40, height: 40 }}
                />
                <Text>{artistData.name}</Text>
                <Pressable onPress={cancelFollowHandler}>
                    <MaterialCommunityIcons name="close-circle" color={COLORS.red} size={20} />
                </Pressable>
            </View>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: COLORS.white,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-evenly',
        borderRadius: 8
    },
});

export default FollowingArtistItem