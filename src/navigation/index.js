// Navigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Interface from '../Interface/Pmanager';
import EditProfile from '../components/pmanager/EditProfile';
import Profile  from '../components/pmanager/Profile';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Interface" component={Interface}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>
        <Stack.Screen name="Profile" component={Profile} />



        

        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
