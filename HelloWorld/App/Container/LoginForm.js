import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import IconVector from 'react-native-vector-icons/Ionicons';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styleLoginForm.container}>
                <StatusBar 
                    barStyle="light-content" />
                <IconVector name='ios-person' style={styleLoginForm.iconLogin} size={150} color="#CECECE" />
                <Text>Login to your account</Text>
                <Text>Enter your credentials below</Text>
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
                    <Text style={styleLoginForm.buttonTextLogin}>Sign in</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styleLoginForm = StyleSheet.create({
    container : {
        padding : 10,
        backgroundColor : '#FFFFFF'
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
        backgroundColor : '#2196F3',
        borderColor: '#2196F3',
        borderRadius: 3
    },
    buttonTextLogin: {
        justifyContent: 'center'
    },
    iconLogin: {
        justifyContent: 'center'
    }
});
