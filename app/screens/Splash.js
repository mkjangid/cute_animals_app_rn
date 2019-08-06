import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    };

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        )
    };

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/splash_screen.png')} style={styles.image}/>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    image:{
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        alignSelf: 'stretch',
        width: '100%'
    }
};

export default SplashScreen;
