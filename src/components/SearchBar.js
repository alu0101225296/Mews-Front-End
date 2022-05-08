// SearchBar.js   https://blog.logrocket.com/create-react-native-search-bar-from-scratch/
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS } from "../styles/theme/Colors";

const SearchBar = ({ searchText, setSearchText, style }) => {
    return (
        <View style={style}>
            <View
                style={
                    styles.searchContainer
                }
            >
                {/* search Icon */}
                <Feather
                    name="search"
                    size={15}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}

                <Entypo name="cross" size={15} color={!!searchText ? COLORS.black : 'transparent'} onPress={() => {
                    setSearchText("");
                    Keyboard.dismiss();
                }} />

            </View>
        </View>
    );
};

// styles
const styles = StyleSheet.create({
    searchContainer: {
        paddingRight: 5,
        paddingLeft: 5,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#d9dbda",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 15,
        marginLeft: 10,
        width: "85%",
    },
});


export default SearchBar;