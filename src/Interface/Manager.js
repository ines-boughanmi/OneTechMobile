
import React from 'react';
import { MaterialIcons, createMaterialBottomTabNavigator, SimpleLineIcons,MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';
import { StyleSheet, Text, View , Image } from 'react-native';
import profile from '../components/manager/Profile';
import projects from '../components/manager/Projects';
import consultants from '../components/manager/Consultants';
import planning from '../components/manager/Planning';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

const NavManager = () => {
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
        name="Projects" component={projects}
        options={{
          tabBarIcon:({focused})=>{
            return(
              <SimpleLineIcons name="paypal" size={24} color="black" />

            )
          }  
           }}
      />
      <Tab.Screen 
        name="Planning" component={planning}
        options={{
          tabBarIcon:({focused})=>{
            return(
              <SimpleLineIcons name="paypal" size={24} color="black" />

            )
          }  
           }}
      />
      <Tab.Screen 
        name="Consultant" component={consultants}
        options={{
          tabBarIcon:({focused})=>{
            return(
              <SimpleLineIcons name="paypal" size={24} color="black" />

            )
          }  
           }}
      />
      <Tab.Screen 
        name="Profile" component={profile}
        options={{
          tabBarIcon:({focused})=>{
            return(
              <SimpleLineIcons name="profile" size={24} color="black" />

            )
          }  
           }}
      />
    </Tab.Navigator>
  );
}

export default NavManager;
