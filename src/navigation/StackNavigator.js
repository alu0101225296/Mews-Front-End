import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Theme } from '../styles/theme/ThemeStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FollowingScreen from '../screens/FollowingScreen';
import RecentScreen from '../screens/RecentScreen';
import SearchScreen from '../screens/SearchScreen';
import ArtistScreen from '../screens/ArtistScreen';
import WebViewScreen from '../screens/WebViewScreen';
import Text from 'react-native';
import { Pressable } from 'react-native';
import { LogoutMenu } from '../components/LogoutMenu';

const Stack = createStackNavigator();

const HeaderStyle = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerTintColor: Theme.colors.main,
  headerTitleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Theme.colors.main,
  },
};
const FollowingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle}>
      <Stack.Screen name="Following" component={FollowingScreen} />
      <Stack.Screen
        name="ArtistFollowing"
        component={ArtistScreen}
        options={{
          headerTintColor: Theme.colors.white,
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="WebViewFollowing"
        component={WebViewScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const RecentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle}>
      <Stack.Screen
        name="Recent"
        component={RecentScreen}
        options={{
          headerRight: () => <LogoutMenu />,
        }}
      />
      <Stack.Screen
        name="WebViewRecent"
        component={WebViewScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="ArtistSearching"
        component={ArtistScreen}
        options={{
          headerTintColor: Theme.colors.white,
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="WebViewSearch"
        component={WebViewScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export { FollowingStackNavigator, RecentStackNavigator, SearchStackNavigator };
