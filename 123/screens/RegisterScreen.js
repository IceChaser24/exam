import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {AuthContext} from '../components/context';


export default function Register(props) {
  const [username , setUsername] = useState(''); 
  const [password , setPassword] = useState(''); 
  const [ConfirmPassword , setConfirmPassword] = useState(''); 
  const onPress = () =>{
    if(username.length < 4) {
      alert('Your username is less than 4 character')
   } else if (password.length < 8) {
      alert('Your password is less than 8 character')
   } else if (password !== ConfirmPassword) {
      alert ('Password is not same as in the confirm input, ti slepoy nahuy? vvedi normalno')
   } else {
    signUp();
   }
  }
  const {signUp} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.textBold, styles.lrText}>Create account</Text>
      <TextInput style={styles.input} onChange={(e) =>  setUsername(e.target.value)} keyboardType="default" placeholder='Enter Username...'/>
      <TextInput style={styles.input} onChange={(e) =>  setPassword(e.target.value)} keyboardType="default" secureTextEntry={true} placeholder='Enter Password...'/>
      <TextInput style={styles.input} onChange={(e) => setConfirmPassword(e.target.value)} keyboardType="default" secureTextEntry={true} placeholder='Confirm Password...'/>
      <View style={styles.buttonContainer}>
        <Button title='Register' onPress ={onPress}/>
      </View>
      <Text style={styles.haveAccount, styles.bottom}>Already have an account? <Text style={styles.TextButton} onPress={ () => props.navigation.navigate('Login')}>Login</Text> </Text>
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
  TextButton:{
    color: '#2196F3'
  },
  lrText:{
    fontSize: 18
  },
  bottom: {
    position: 'absolute',
    bottom:20
  }
});
