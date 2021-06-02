import { StatusBar } from 'expo-status-bar';
import React, { useEffect} from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import {AuthContext} from './components/context';
import RootStackScreen from './screens/RootStack';
import Home from './screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const AccountWithToken = createStackNavigator();
  <AccountWithToken.Navigator headerMode='none'>
        <AccountWithToken.Screen name="Home" component={Home}/>
    </AccountWithToken.Navigator>


export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('token here');
      setIsLoading(false); 
      console.log('login');
    },
    signOut: () => { 
      setUserToken(null);
      setIsLoading(false);  
      console.log('sign out');
      console.log(userToken);
    },
    signUp: () => {
      setUserToken('token here');
      setIsLoading(false); 
    },

  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  },[]);

  if(isLoading) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer> 
       { userToken !== null ?(
      <AccountWithToken.Navigator headerMode='none'>
      <AccountWithToken.Screen name="Home" component={Home}/>
      </AccountWithToken.Navigator>
    )
    : 
      <RootStackScreen/>
       }
      </NavigationContainer>
    </AuthContext.Provider>  
   );
}
