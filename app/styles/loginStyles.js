import {StyleSheet} from "react-native";
import theme from "./theme.style";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        alignSelf: 'stretch',
        width: '100%'
    },
    loginForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputOutline:{
        borderColor: 'white',
        borderWidth:5,
        color:'white',
        marginTop:20,
        width:'70%'
    },
    inputText:{
        color:'white'
    },
    loginButton:{
        backgroundColor: theme.SECONDARY_COLOR,
        alignItems: 'center',
        marginTop:50,
        width:'70%'
    },
    loginButtonText:{
        color:'white'
    },

});
