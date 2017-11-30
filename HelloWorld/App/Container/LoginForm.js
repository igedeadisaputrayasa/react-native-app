import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';


export default class LoginForm extends Component {
    render() {
        return (
            <View style={styleLoginForm.container}>
                <StatusBar 
                    barStyle="light-content" />
                
                <TextInput 
                    style={styleLoginForm.input}
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}  
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder='username or email' />
                <TextInput 
                    style={styleLoginForm.input} 
                    secureTextEntry
                    returnKeyType="go"
                    placeholder='password' 
                    ref={(input) => this.passwordInput = input } />
                <TouchableOpacity style={styleLoginForm.buttonLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styleLoginForm = StyleSheet.create({
    container : {
        padding : 10,
        backgroundColor : '#2c68c9'
    },
    input : {
        height : 30,
        marginBottom : 10,
        borderColor : '#000',
        backgroundColor : '#749bdb',
        padding : 5
    },
    buttonLogin : {
        padding : 5,
        backgroundColor : '#441121',
        width : 120
    }
});
