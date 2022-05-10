import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from "../styles/theme/Colors";
import FollowingScreen from '../screens/FollowingScreen';
import RecentScreen from '../screens/RecentScreen';
import SearchScreen from '../screens/SearchScreen';
import AboutTheAppScreen from '../screens/AboutTheAppScreen';
import ArtistScreen from "../screens/ArtistScreen";


const Stack = createStackNavigator();

// const MainStackNavigator = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Following" component={FollowingScreen} />
//             <Stack.Screen name="Recent" component={RecentScreen} />
//             <Stack.Screen name="Search" component={SearchScreen} />
//         </Stack.Navigator>
//     );
// }
const HeaderStyle = {
    headerShown: true,
    headerTitleAlign: 'center',
    headerTintColor: COLORS.main,
    headerTitleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: COLORS.main,
    },
}
const FollowingStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={HeaderStyle}>
            <Stack.Screen name="Following" component={FollowingScreen} />
            <Stack.Screen name="Artist" component={ArtistScreen}
                options={{
                    headerTintColor: COLORS.white,
                    headerTransparent: true,
                    headerTitle: "",
                }} />
        </Stack.Navigator>
    );
}

const RecentStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={HeaderStyle}>
            <Stack.Screen name="Recent" component={RecentScreen} />
        </Stack.Navigator>
    );
}

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={HeaderStyle}>
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
}

const AboutTheAppStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="About the App" component={AboutTheAppScreen} />
        </Stack.Navigator>
    );
}

export { FollowingStackNavigator, RecentStackNavigator, SearchStackNavigator, AboutTheAppStackNavigator };