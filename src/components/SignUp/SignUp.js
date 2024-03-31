import  React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Image , ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Login from '../Login';


const SignUpComponentS = ({onPress, value , setValue, placeholder, secureTextEntry}) => {
  
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  
  
  const navigation = useNavigation();

const onLoginpressed= () => {


navigation.navigate('Login');
};
  
  return (
    <ScrollView contentContainerStyle={styles.background}>
    <View style={styles.container}>
      {/* 
      <TouchableOpacity style={styles.pos} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/onetechb.png')} style={styles.logo} />
      </TouchableOpacity>
      */}
      <Text style={styles.heading}>Register</Text>
      <View style={styles.line}></View>
      <View style={styles.form}>
        <View style={styles.form1}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="example" />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput value={lastname} onChangeText={setLastname} style={styles.input} placeholder="example" />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="example@gmail.com" keyboardType="email-address" />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Location</Text>
          <TextInput value={location} onChangeText={setLocation} style={styles.input} placeholder="state, city" />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone</Text>
          <TextInput value={phone} onChangeText={setPhone} style={styles.input} placeholder="+216 ********" keyboardType="phone-pad" />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput value={passwordRepeat} onChangeText={setPasswordRepeat} style={styles.input} placeholder="Confirm your password" secureTextEntry={true} />
          {/* Error messages */}
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text onPress={onLoginpressed} style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.alternateLink}>Already have an account? Login <Text onPress={onLoginpressed} style={styles.link}>here</Text></Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  background:{
    width:'auto',
    height:'auto',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom:40,
   
  },
  pos: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 'auto',
    paddingBottom: 10,
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#00396b',
    textAlign: 'center',

  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#f08700',
    paddingTop:30,
    
  },
  form: {
    paddingTop: 30,
    
  },
  form1:{
    paddingBottom:20,
  },

  formGroup: {
    paddingBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00396b',
  },
  input: {
    width: '100%',
    padding: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#f08700',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  alternateLink: {
    paddingTop:10,
    fontSize: 18,
  },
  link: {
    color: '#f08700',
  },
});

export default SignUpComponentS; 
