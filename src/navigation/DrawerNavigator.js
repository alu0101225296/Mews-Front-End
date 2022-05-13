import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import {
  FollowingStackNavigator,
  RecentStackNavigator,
  SearchStackNavigator,
  AboutTheAppStackNavigator,
} from './StackNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Recent">
      <Drawer.Screen
        name="AboutTheApp"
        component={AboutTheAppStackNavigator}
        options={{ drawerLabel: 'About the App' }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
