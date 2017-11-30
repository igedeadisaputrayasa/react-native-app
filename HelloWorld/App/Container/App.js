/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';


export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <Text>Inventory System</Text>
        <LoginForm />
      </KeyboardAvoidingView>
    );
  }
}