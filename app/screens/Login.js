import React, { Component } from 'react';
import {
    TextInput,
    View,
    ActivityIndicator,
    Image,
    ImageBackground,
    StyleSheet,
    ScrollView,
    ToastAndroid,
    Alert
} from 'react-native';

import { Container, Header, Content, Button, Text ,H1, H2, H3, Item, Input,Spinner} from 'native-base';
import loginStyle from '../styles/loginStyles';
import HTTPHelper from "../networking/HTTPHelper";

export default class Login extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            isLoading:false
        }
    }

    onLoginPressed=()=> {
        this.setState({isLoading: true});
        HTTPHelper('https://us-central1-cute-animals-820ab.cloudfunctions.net/auth',"POST",
            {user_id:this.state.userId,password:this.state.password})
            .then(responseData => {
                //ToastAndroid.show(responseData.message);
                //Alert.alert(JSON.stringify(responseData));
                this.setState({isLoading: false});
                if (responseData.status.toLowerCase()==="ok"){
                    this.props.navigation.navigate('Home');
                }
            })
            .catch(error => {
                //ToastAndroid.show(JSON.stringify(error));
                //Alert.alert(JSON.stringify(error));
                this.setState({isLoading: false});
            });
    };

    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
                    <Spinner color='green' />
                </View>
            )
        }

        return (
            <View style={loginStyle.container}>
                <View style={loginStyle.loginForm }>
                    <Item rounded style={loginStyle.inputOutline}>
                        <Input style={loginStyle.inputText} placeholderTextColor='white' placeholder='User Id' onChangeText={(userId) => this.setState({userId})}/>
                    </Item>
                    <Item rounded style={loginStyle.inputOutline}>
                        <Input style={loginStyle.inputText} placeholderTextColor='white' placeholder='Password' secureTextEntry={true}
                               onChangeText={(password) => this.setState({password})}/>
                    </Item>
                    <Button block large rounded onPress={this.onLoginPressed} style={loginStyle.loginButton} textStyle={loginStyle.loginButtonText}>
                        <Text>Login</Text>
                    </Button>
                </View>
            </View>
        )
    }
}