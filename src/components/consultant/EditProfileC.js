import  React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Image , ScrollView} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import images from '../../assets/entreprise.jpg';

const EditProfile = ({onPress, value , setValue, placeholder, secureTextEntry, navigation}) => {
  const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');


  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.background}>
    <View style={styles.container}>
      {/* 
      <TouchableOpacity style={styles.pos} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/onetechb.png')} style={styles.logo} />
      </TouchableOpacity>
      */}

      <View
        style={styles.header}   >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}>
        
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color='#000000'
          />
        </TouchableOpacity>

        <Text style={styles.text}>Edit Profile</Text>
      </View>

      <View></View>
      

      <View
          style={styles.editImage}>
        
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{ uri: selectedImage }}
              style={styles.image} />

            <View
              style={styles.icon}
            >
              <MaterialIcons
                name="photo-camera"
                size={32}
                
                
              />
            </View>
          </TouchableOpacity>
        </View>
      
      
      
      <View style={styles.form}>
        <View style={styles.form1}>
        <View style={styles.formGroup}>
          <Text style={styles.label}/*{user.name}*/>Name</Text>
          <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="example" />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}/*{user.lastName}*/>Last Name</Text>
          <TextInput value={lastname} onChangeText={setLastname} style={styles.input} placeholder="example" />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}/*{user.Email}*/>Email</Text>
          <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="example@gmail.com" keyboardType="email-address" />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}/*{user.Location}*/>Location</Text>
          <TextInput value={location} onChangeText={setLocation} style={styles.input} placeholder="state, city" />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}/*{user.Phone}*/>Phone</Text>
          <TextInput value={phone} onChangeText={setPhone} style={styles.input} placeholder="+216 ********" keyboardType="phone-pad" />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}/*{user.Password}*/>Password</Text>
          <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
          {/* Error messages */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}/*{user.ConfirmPassword}*/>Confirm Password</Text>
          <TextInput value={passwordRepeat} onChangeText={setPasswordRepeat} style={styles.input} placeholder="Confirm your password" secureTextEntry={true} />
          {/* Error messages */}
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text  style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
    
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  header:{marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "center",
  },

  text:{ 
    fontFamily: 'bold', 
    fontSize: 18, 
    lineHeight: 22 
  },

  editImage:{
    paddingTop:30,
    alignItems: "center",
    marginVertical: 22,
  },

  image:{
    height: 170,
    width: 170,
    borderRadius: 85,
    borderWidth: 2,
  },

  icon:{position: "absolute",
  bottom: 0,
  right: 10,
  zIndex: 9999,
  },

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
    color: '#fff',
  },

});

export default EditProfile; 

export const imagesDataURL = [
  'https://upload.wikimedia.org/wikipedia/commons/a/af/Default_avatar_profile.jpg'
]