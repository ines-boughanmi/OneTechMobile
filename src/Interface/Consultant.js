import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StyleSheet, Text, View , Image } from 'react-native';
import Profile from '../components/consultant/Profile';
import Mission from '../components/consultant/Mission';
import Schedule from '../components/consultant/Schedule';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

const NavConsultant = () => {
  return (
    <Tab.Navigator
      barStyle={{
        showLabel: false,
      position: 'absolute',
      bottom: 15,
      left: 10,
      right: 10,
      elevation: 0,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      height: 90,}}

      activeColor="#f08700"
      inactiveColor="#748c94"
      shifting={true}
    >
      <Tab.Screen 
        name="Mission" 
        component={Mission} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="profile" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Schedule" 
        component={Schedule} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavConsultant;

