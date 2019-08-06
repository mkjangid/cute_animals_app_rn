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

import { Container, Header, Content, Button, Text ,H1, H2, H3, Item, Input} from 'native-base';
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
                Alert.alert(JSON.stringify(responseData));
                this.setState({isLoading: false});
                this.props.navigation.navigate('Home');

            })
            .catch(error => {
                ToastAndroid.show(JSON.stringify(error));
                Alert.alert(JSON.stringify(error));
                this.setState({isLoading: false});
            });
    };

    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
                    <ActivityIndicator size="small" color="#00ff00" />
                </View>
            )
        }

        return (
            <View style={loginStyle.container }>
                <ImageBackground source={require('../assets/logo.png')} style={loginStyle.backgroundImage}/>
                <View style={loginStyle.loginForm }>
                    <Item rounded style={{borderColor: '#8a572b'}}>
                        <Input placeholder='User Id' onChangeText={(userId) => this.setState({userId})}/>
                    </Item>
                    <View style={{margin:10}} />
                    <Item rounded style={{borderColor: '#8a572b'}}>
                        <Input placeholder='Password' secureTextEntry={true}
                               onChangeText={(password) => this.setState({password})}/>
                    </Item>
                    <View style={{margin:40}} />
                    <Button rounded onPress={this.onLoginPressed} style={{backgroundColor:'#8a572b',
                        justifyContent: 'center'}}>
                        <Text style={{color:'white'}}>Login</Text>
                    </Button>
                </View>
            </View>
        )
    }
}