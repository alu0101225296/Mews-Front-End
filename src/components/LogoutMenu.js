import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { Theme } from '../styles/theme/ThemeStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth } from '../auth/Firebase';
import RNRestart from 'react-native-restart';

const signOutUser = async () => {
  try {
    await auth.signOut();
    console.log('Signed out');
    RNRestart.Restart();
  } catch (e) {
    console.log(e);
  }
};

export const LogoutMenu = () => (
  <View style={styles.icon}>
    <Menu>
      <MenuTrigger>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={30}
          color={Theme.colors.main}
        />
      </MenuTrigger>
      <MenuOptions style={styles.menu}>
        <MenuOption>
          <Text style={{ color: Theme.colors.grayDark }}>
            {auth.currentUser ? auth.currentUser.email : 'No email'}
          </Text>
        </MenuOption>
        <MenuOption onSelect={signOutUser}>
          <Text style={{ color: Theme.colors.red }}>Log Out</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center',
  },
  menu: {
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
});
