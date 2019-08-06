import {StyleSheet} from 'react-native';
import theme from './theme.style';

export default styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'white',
        backgroundColor: theme.PRIMARY_COLOR,
        borderWidth: 1,
        elevation: 5,
    },
    thumbnail: {
        width: 300,
        height: 500,
    },
    text: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color:'white'

    },
    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});