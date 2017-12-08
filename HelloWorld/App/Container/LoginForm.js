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
import IconVectorFontAwesome from 'react-native-vector-icons/FontAwesome';

export default class LoginForm extends Component {
    constructor(props){
        super(props)
        var userName, userPassword;
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
            var grant_type = 'password';
            var client_id = '1_3l5d04prwbok0gkk8c8s4w40448wcoo4ckgowsgo84gc0o4wog';
            var client_secret = '1i3g9lfiebok8cggoo4swco8o8s4kck0kco4ow8gsg8g0kkgsc';
            var uRL = 'http://localhost:8000/oauth/v2/token?username='+ userName +'&password='+ userPassword +'&grant_type='+ grant_type +'&client_id='+ client_id +'&client_secret='+ client_secret;
            fetch(uRL,{
            //fetch('http://localhost:8000/oauth/v2/token',{
                method:'get',
                header:{
                    'Accept': 'application/json'
                }
                /*,
                body:JSON.stringify({
                    grant_type: 'password',
                    username: userName,
                    password: userPassword,
                    client_id: '1_3l5d04prwbok0gkk8c8s4w40448wcoo4ckgowsgo84gc0o4wog',
                    client_secret: '1i3g9lfiebok8cggoo4swco8o8s4kck0kco4ow8gsg8g0kkgsc'
                })*/                
            })
            .then((response) => response.json())
                .then((responseJson)=>{
                    if(responseJson.error){
                        alert(responseJson.error_description);
                    }else if(responseJson.access_token){
                        alert("Login Successfully (Token ID "+ responseJson.access_token +" )");
                    }
                })
                .catch((error)=>{
                    console.error(error);
                });
            }
    }
    validateFields (){
        const { userName, userPassword } = this.state
        if (userName === '' && userPassword === '') {
          Alert.alert('Error', 'Please fill out username and password field')
          return false
        } else if (userName === '') {
          Alert.alert('Error', 'Please fill out username field')
          return false
        } else if (userPassword === '') {
          Alert.alert('Error', 'Please fill out password field')
          return false
        }
        return true
    }

    render() {
        return (
            <View style={styleLoginForm.container}>
                <StatusBar 
                    barStyle="light-content" />
                <View>
                    <IconVector name='ios-person' style={styleLoginForm.iconLogin} size={100}/>
                    <Text style={styleLoginForm.wordOne}>Login to your account</Text>
                    <Text style={styleLoginForm.wordTwo}>Enter your credentials below</Text>
                </View>
                <View style={styleLoginForm.inputForm}>
                    <TextInput 
                        style={styleLoginForm.input}
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}  
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder='username' 
                        onChangeText={userName => this.setState({userName})} />
                </View>
                <View style={styleLoginForm.inputForm}>
                    <TextInput 
                        style={styleLoginForm.input} 
                        secureTextEntry
                        returnKeyType="go"
                        placeholder='password' 
                        ref={(input) => this.passwordInput = input } 
                        onChangeText={userPassword => this.setState({userPassword})} />
                </View>
                <View>
                    <TouchableOpacity style={styleLoginForm.buttonLogin} onPress={this.login}>
                        <Text style={styleLoginForm.buttonTextLogin}>Sign in        
                            <IconVectorFontAwesome name='arrow-circle-right' style={styleLoginForm.iconSignInLogin} size={15}/>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styleLoginForm = StyleSheet.create({
    iconTextInput:{
        
    },
    wordOne:{
        color: '#000000',
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 10
    },
    wordTwo:{
        color: '#CECECE',
        textAlign: 'center',
        fontSize: 12,
        marginBottom: 10
    },
    inputForm:{
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 10,
        borderRadius: 3,
        padding : 10,
        width: 250
    },
    container : {
        flex:1,
        padding : 10,
        backgroundColor : '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input : {
        borderColor : '#CECECE',
        backgroundColor : '#FFFFFF'
    },
    buttonLogin : {
        height : 30,
        padding : 5,
        backgroundColor : '#2196F3',
        borderColor: '#2196F3',
        borderRadius: 3,
        width: 250
    },
    buttonTextLogin: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        color: '#FFFFFF'
    },
    containerCircleIconLogin:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    outCircleIconLogin:{
        borderRadius: 40,
        width: 80,
        height: 80,
        backgroundColor: 'white'
    },
    innerCircleIconLogin:{
        borderRadius: 35,
        width: 70,
        height: 70,
        backgroundColor: '#CECECE'
    },
    iconLogin: {
        padding: 0,
        margin:0,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    iconSignInLogin:{
        
    }
});
