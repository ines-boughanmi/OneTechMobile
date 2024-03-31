/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView, StyleSheet, Text,} from 'react-native'; 


import Navigation from './src/navigation';



const App = () => {
  return (

    <SafeAreaView style={styles.root}>
    
    <Navigation/>
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  root: {
   flex: 1, 
   
  }
 });
 



export default App;