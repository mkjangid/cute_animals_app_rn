import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        alignSelf: 'stretch',
        width: '100%'
    },
    loginForm: {
        position: 'absolute',
        top: 300,
        bottom: 0,
        left: 0,
        right: 0,
        paddingLeft:'15%',
        paddingRight:'15%'
    },
});
