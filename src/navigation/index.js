// Navigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Interface from '../Interface/Consultant';
import Profile from '../components/consultant/Profile';
import EditProfileC from '../components/consultant/EditProfileC';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Interface" component={Interface}/>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfileC" component={EditProfileC} />



        

        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
