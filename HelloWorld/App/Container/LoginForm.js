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
    constructor(props){
		super(props)
		this.state={
			userName:'',
			userPassword:''
		}
	}
    login = () =>{
        const {userName,userPassword} = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(userName==""){
			alert("Please enter username");		    
		}else if(userPassword==""){
            alert("Please enter password");
        }else{            
            fetch('http://localhost:8000/oauth/v2/token',{
                method:'get',
                header:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({
                    username: userName,
                    password: userPassword,
                    grant_type: 'password',
                    client_id: '1_kbi45ho80i888o4wc08s8k8gs04woggwsg4s84swk04ocgoc8',
                    client_secret: '54b6sr58v6ccwkscso0kgwgos80wk84oco4occ40scgk8k0wo8'
                })                
            })
            .then((response) => response.json())
                .then((responseJson)=>{
                    alert("Successfully Login");
                })
                .catch((error)=>{
                    console.error(error);
                });
            }
    }

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
                    placeholder='username or email' 
                    onChangeText={userName => this.setState({userName})} />
                <TextInput 
                    style={styleLoginForm.input} 
                    secureTextEntry
                    returnKeyType="go"
                    placeholder='password' 
                    ref={(input) => this.passwordInput = input } 
                    onChangeText={userPassword => this.setState({userPassword})} />
                <TouchableOpacity style={styleLoginForm.buttonLogin} onPress={this.login}>
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
