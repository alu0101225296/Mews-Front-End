import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import FollowingScreen from '../screens/FollowingScreen';
import RecentScreen from '../screens/RecentScreen';
import SearchScreen from '../screens/SearchScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Recent">
      <Drawer.Screen
        name="Following2"
        component={FollowingScreen}
        options={{ drawerLabel: 'Following' }}
      />
      <Drawer.Screen
        name="Recent2"
        component={RecentScreen}
        options={{ drawerLabel: 'Recent' }}
      />
      <Drawer.Screen
        name="Search2"
        component={SearchScreen}
        options={{ drawerLabel: 'Search' }}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
