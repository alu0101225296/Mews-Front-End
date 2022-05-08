import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Recent">
            <Drawer.Screen
                name="Following"
                component={FollowingScreen}
                options={{ drawerLabel: 'Following' }}
            />
            <Drawer.Screen
                name="Recent"
                component={RecentScreen}
                options={{ drawerLabel: 'Recent' }}
            />
            <Drawer.Screen
                name="Search"
                component={SearchScreen}
                options={{ drawerLabel: 'Search' }}
            />
        </Drawer.Navigator>
    );
}
export default MyDrawer;
