import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

class SplashScreen extends Component {
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
                <Image source={require('/app/assets/splash_screen.png')} resizeMode="contain" />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    }
};

export default SplashScreen;
