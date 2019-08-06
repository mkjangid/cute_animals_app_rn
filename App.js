import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './app/screens/Login';
import HomeScreen from './app/screens/Home';
import SplashScreen from "./app/screens/Splash";

const MainNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
},{
  initialRouteName: "Splash"
});

const App = createAppContainer(MainNavigator);

export default App;