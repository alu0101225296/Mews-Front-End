/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, Text, TextInputBase, View } from 'react-native';

const ArtistScreen = () => {
    const example = () => { return "texto de prueba"; }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>
                Try editing me!
            </Text>

            <ScrollView>
                <Text>
                    Introduce {example()}
                </Text>
            </ScrollView>
        </View>
    );
}

export default ArtistScreen;