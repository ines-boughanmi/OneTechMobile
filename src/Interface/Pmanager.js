
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StyleSheet, Text, View , Image } from 'react-native';
import profile from '../components/pmanager/Profile';
import assignments from '../components/pmanager/Assignments';
import parking from '../components/pmanager/Parking';


import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



const Tab = createMaterialBottomTabNavigator();

const NavPmanager = () => {
  return (
    <Tab.Navigator
      barStyle={{
        showLabel: false,
      position: 'absolute',
      bottom: 50,
      left: 10,
      right: 10,
      elevation: 0,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      height:35,}}

      activeColor="#f08700"
      inactiveColor="#748c94"
      shifting={true}
    >


      <Tab.Screen 
        name="Pofile" component={profile} 
        options={{
          tabBarIcon:({focused})=>{
            return(
              <SimpleLineIcons name="user" size={24} color="black" />

            )
          }  
           }}
             /> 
      <Tab.Screen 

        name="Parking" component={parking} 
        options={{
          tabBarIcon:({focused})=>{
            return(
              <SimpleLineIcons name="paypal" size={24} color="black" />

            )
          }  
           }}
        
      />
      <Tab.Screen 
        name="Assignments" component={assignments} 
        options={{
          tabBarIcon:({focused})=>{
            return(
              <SimpleLineIcons name="paper-plane" size={24} color="black" />

            )
          }  
           }}
      />

    </Tab.Navigator>
  );
}

export default NavPmanager;
