import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme } from '../styles/theme/ThemeStyle';
import {
  FollowingStackNavigator,
  RecentStackNavigator,
  SearchStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="RecentTab"
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.blue,
        tabBarInactiveTintColor: Theme.colors.gray,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="FollowingTab"
        component={FollowingStackNavigator}
        options={{
          title: 'Following',
          tabBarLabel: 'Following',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-music"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RecentTab"
        component={RecentStackNavigator}
        options={{
          title: 'Recent News',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="oo"
        component={SearchStackNavigator}
        options={{
          title: 'Search',
          headerStyle: {},
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
