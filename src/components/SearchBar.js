// SearchBar.js   https://blog.logrocket.com/create-react-native-search-bar-from-scratch/
import React from 'react';
import { StyleSheet, TextInput, View, Keyboard, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { Theme } from '../styles/theme/ThemeStyle';

// TODO: NO  PASARLE EL ESTILO, DECLARARLO EN SU CONTENEDOR QUE LO LLAMA
const SearchBar = ({ searchText, setSearchText, style }) => {
  return (
    <View style={style}>
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          size={15}
          color={Theme.colors.gray}
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Entypo
          name="cross"
          size={15}
          color={!!searchText ? Theme.colors.gray : 'transparent'}
          onPress={() => {
            setSearchText('');
            Keyboard.dismiss();
          }}
        />
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  searchContainer: {
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#d9dbda',
    borderRadius: Theme.borderRadius.small,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: '85%',
  },
});

export default SearchBar;
