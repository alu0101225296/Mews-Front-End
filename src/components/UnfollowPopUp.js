import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Theme } from '../styles/theme/ThemeStyle';

const UnfollowPopUp = ({ isModalVisible, toggleModal }) => {
  return (
    <Modal
      animationType={'fade'}
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}>
      <View
        style={{
          backgroundColor: Theme.colors.white,
        }}>
        <Text>Wanna unfollow?</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Theme.colors.black,
          }}>
          <Button title="YES" onPress={toggleModal} />
          <Button title="NO" onPress={toggleModal} />
        </View>
      </View>
    </Modal>
  );
};

//onPress={toggleModal}

export default UnfollowPopUp;
