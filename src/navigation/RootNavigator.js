import { auth, onAuthStateChanged } from '../auth/Firebase';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from '../screens/AuthScreen.js';
import TabNavigator from './TabNavigator.js';
import React, { useEffect, useState } from 'react';

const RootNavigator = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthScreen />}
    </NavigationContainer>
  );
};

export default RootNavigator;
