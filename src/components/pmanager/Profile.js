import {  View,  Text,  TouchableOpacity,  Image,  Modal, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import EditProfile from './EditProfile';

const Profile = ({onPress}) => {


  const navigation = useNavigation();
  const onEditpressed= () => {


    navigation.navigate('EditProfile');
    };
  return (


        <View style={styles.body}> 
        
        <View style={{ width: "100%" }}>
        <Image
          source={require('../../assets/background.jpg')}
          resizeMode="cover"
          style={styles.backgroundImage}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image style={styles.image}
          source={require('../../assets/rayen.jpg')}
          resizeMode="contain"
      />
        

        <Text style={styles.text}>
          Rayen ouelhezi</Text>
        </View>
          
             
            {/* Bouton d'édition */}
          <View style={styles.actionButton}>
            <TouchableOpacity style={[styles.button, { marginRight: 10 }]}>
              <Text onPress={onEditpressed} style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            {/* Bouton de suppression */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>


          
        </View>
    

  )
}

export default Profile


const styles = StyleSheet.create({

  body:{
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:200,
    
  },

  backgroundImage:{
    height: 228,
     width: "100%",
  },


  image:{
    height: 155,
    width: 155,
    borderRadius: 999,
    borderWidth: 2,
    marginTop: -90,
  },

  text:{
    fontSize: 25,
    lineHeight: 50,
    color: '#242760',
  },

  actionButton: {
    flexDirection: 'row',
    paddingTop:60,
    
  },
  button: {
    display:"flex",
    backgroundColor: '#f08700',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});