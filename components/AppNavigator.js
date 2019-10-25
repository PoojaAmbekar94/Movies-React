import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
   Dashboard: {
    screen: Dashboard,
  }
},
{
    initialRouteName: 'Login',
    headerMode: 'none'
  });

export default createAppContainer(AppNavigator);