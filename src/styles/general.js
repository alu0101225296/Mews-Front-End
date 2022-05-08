import { Platform, StatusBar, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // padding on the top if its android
    },
    simlpeText: {
        color: 'black',
    }
});

export default styles;
