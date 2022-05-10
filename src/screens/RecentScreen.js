/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, Text, View, Button, Alert, StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../styles/theme/Colors';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar'

const RecentScreen = () => {
    const example = () => { return "texto de prueba"; }
    return (
        <View style={Style.mainStyle}><FocusAwareStatusBar
            barStyle='dark-content'
            backgroundColor={COLORS.white}
        />

            <Text>
                Try editing me!
            </Text>
            <Button
                color='purple'
                title='testing button'
                onPress={() => Alert.alert('MyTitle', 'MyMessage', [
                    { text: 'Ye', onPress: () => console.log('yes') },
                    { text: 'Nope', onPress: () => console.log('no') }
                ])}
            />
            <ScrollView>
                <Text>
                    Introduce {example()}
                </Text>
            </ScrollView>
        </View>
    );
}

const Style = {  // TODO: cambiar a stylesheet
    mainStyle: {
        flex: 1,
    },
};

export default RecentScreen;