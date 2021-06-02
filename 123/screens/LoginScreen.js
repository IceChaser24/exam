import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import {AuthContext} from '../components/context';
import Auth0 from "react-native-auth0";
const auth0 = new Auth0({ 
  domain: 'dev-qvr1pruh.eu.auth0.com', 
  clientId: 'OzkZjWiIPMir_4MmHmOHyLp3YPDCF7P3UYFFYQWkPrMtKv2ohldNbBf7EefKZ8IS' 
});

export default function Login(props) {

  /* const onChangeText = text => {
    this.setState({text : text});
    } 
   const onPress = () => {
      const {text} = this.state;
   
      if(text.length < 4) {
         console.log('Your text is less than what is required.');
      } () => {signIn()}
   }
*/
  /*const [username , setUsername] = useState(''); 
  const [password , setPassword] = useState(''); 
  const onPress = () =>{
    if(username.length < 4) {
      alert('Your username is less than 4 character')
   } else if (password.length < 8) {
      alert('Your password is less than 8 character')
   } else{
      signIn();
   }
  }
  */
  const {signIn} = React.useContext(AuthContext);

  const onLogin = () => {
   auth0.webAuth
      .authorize({scope: 'openid profile email'})
      .then(credentials => 
      this.setState({ accessToken: credentials.accessToken })
    )
  .catch(error => console.log(error))
  }
  
  const onLogout = () => {
    auth0.webAuth
      .clearSession({})
      .then(success => {
          Alert.alert(
              'Logged out!'
         );
          this.setState({ accessToken: null });
     })
    .catch(error => {
        console.log('Log out cancelled');
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textBold, styles.lrText}>Sign in</Text>
      
      <View style={styles.buttonContainer}>
        <Button title='Login' onPress ={onLogin()}/>
      </View>
      <Text style={styles.haveAccount, styles.bottom}>Don`t have an account? <Text style={styles.TextButton} onPress={ () => props.navigation.navigate('Register')}>Create</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    padding: 8,
    marginTop: 10,
  },
    textBold: {
    fontWeight: 'bold'  
  },
    haveAccount: {
      marginTop: 10,
      color: '#9c9c9c'
  },
    lrText:{
      fontSize: 18
  },
  TextButton:{
    color: '#2196F3'
  },
  bottom: {
      position: 'absolute',
      bottom:20
  }
});
