import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthContext } from '../components/context';

export default function Home() {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title='Sign out' onPress={() => {signOut()}}/>
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
  }
});
