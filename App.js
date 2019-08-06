import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './app/screens/Login'
import HomeScreen from './app/screens/Home'

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
},{
  initialRouteName: "Login"
});

const App = createAppContainer(MainNavigator);

export default App;