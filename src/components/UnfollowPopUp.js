import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS } from '../styles/theme/Colors';

const UnfollowPopUp = ({ isModalVisible, toggleModal }) => {
  return (
    <Modal
      animationType={'fade'}
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}>
      <View
        style={{
          backgroundColor: COLORS.white,
        }}>
        <Text>Wanna unfollow?</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.black,
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
