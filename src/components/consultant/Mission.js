import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";


const Mission = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Image
            source={require("../../assets/onetech.png")}
            resizeMode="contain"
            style={styles.menuIconStyle}
          />
          <Image
            source={require("../../assets/rayen.png")}
            resizeMode="contain"
            style={styles.faceIconStyle}
          />
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.title}>Missions</Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>

<View style={styles.searchSection}>
          <View style={styles.searchPallet}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search a Car"
                onChangeText={(text) => searchmissions(text)}
            />
            <View style={styles.searchIconArea}>
            <Image
                source={require("../../assets/icons/magnifying-glass.png")}
                resizeMode="contain"
                style={styles.magnifyingIconStyle}
              />
            
              
              
            </View>
          </View>
        </View>

        <View style={styles.listSection}>
  <Text style={styles.headText}>Our Missions</Text>

  <TouchableOpacity
    style={styles.element}
  >
    <View style={styles.infoArea}>
      <Text style={styles.infoTitle}>name mission</Text>
      <Text style={styles.infoSub}>07/09/2024</Text>
      <Text style={styles.infoAvailability}>
        <Text style={styles.infoAmount}>Location:tunis </Text>
      </Text>
    </View>
    <View style={styles.imageArea}>
      <Image
        source={require("../../assets/icons/done.png")}
        resizeMode="contain"
        style={styles.missionImage}
      />
    </View>
  </TouchableOpacity>
</View>

        </View>
      
        </SafeAreaView>
  )


        
}

export default Mission;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconStyle: {
    width: 30,
  },
  faceIconStyle: {
    height: 40,
    width: 40,
    borderRadius: 999,
    borderWidth: 2,  
  },

  titleSection: {
    marginTop: 15,
    flexDirection: 'row',
  },

  title: {
    fontSize: 32,
    fontWeight: "600",
  },

  button: {
    backgroundColor: '#f08700',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 60,
    left:100,
    
  },

  searchSection: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "center",
  },
  searchPallet: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    borderRadius: 8,
    width: "100%",
    height: 30,
    backgroundColor: "white",
  },
  searchInput: {
    width: 245,
    height: 30,

    backgroundColor: "white",
  },
  searchIconArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  magnifyingIconStyle: {
    width: 24,
    height: 24,
    marginRight: -10,
  },



  typesSection: {
    marginTop: 15,
    flexDirection: "row",
  },
  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: "bold",
    color: "black",
  },
  typesText: {
    fontSize: 15,
    marginRight: 33,
    fontWeight: "500",
    color: "#696969",
  },

  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  elementPallet: {
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    width: "110%",
    height: 450,
  },
  element: {
    height: 100,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 13,
  },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoSub: {
    fontSize: 11,
    fontWeight: "600",
    color: "#696969",
  },
  infoAvailability: {
    position: "absolute",
    bottom: 0,
    fontSize: 10,
    color: "#696969",
    fontWeight: "bold",
  },
  infoAmount: {
    fontSize: 12,
    color: "black",
    fontWeight: "600",
  },
  imageArea: {
    flex: 1,
  },
  missionImage: {
    position: "absolute",
    top: -15,
    left: -15,
    width: "140%",
    height: "140%",
  },



})



{/*

import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";


const image_v_1 = require("./assets/missions/v-1.png");
const image_v_2 = require("./assets/missions/v-2.png");
const image_v_3 = require("./assets/missions/v-3.png");
const image_v_4 = require("./assets/missions/v-4.png");


import Info from "./Info";



import data from "./missions.json";
const Mission = ({navigation}) => {

  const [missions, setmissions] = useState(data.missions);
    const [filteredmissions, setFilteredmissions] = useState(data.missions);


    const getImage = (id) => {
      if(id == 1) return image_v_1;
      if(id == 2) return image_v_2;
      if(id == 3) return image_v_3;
      if(id == 4) return image_v_4;
    }


    const searchmissions = (keyword) => {

      const lowercasedKeyword = keyword.toLowerCase();
  
      const results = missions.filter(mission => {
          return mission.make.toLowerCase().includes(lowercasedKeyword)
      })
  
      setFilteredmissions(results);
    }

    

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Image
            source={require("../../assets/onetech.png")}
            resizeMode="contain"
            style={styles.menuIconStyle}
          />
          <Image
            source={require("../../assets/rayen.png")}
            resizeMode="contain"
            style={styles.faceIconStyle}
          />
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.title}>Cars</Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>

<View style={styles.searchSection}>
          <View style={styles.searchPallet}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search a Car"
                onChangeText={(text) => searchmissions(text)}
            />
            <View style={styles.searchIconArea}>
            <Image
                source={require("../../assets/icons/magnifying-glass.png")}
                resizeMode="contain"
                style={styles.magnifyingIconStyle}
              />
            
              
              
            </View>
          </View>
        </View>

        <View style={styles.listSection}>
          <Text style={styles.headText}>Missions</Text>

          <ScrollView style={styles.elementPallet}>
            {filteredmissions.map((mission) => {
              return (
                <TouchableOpacity
                    style={styles.element}
                    key={mission.id}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Info', { id: mission.id }) }
                >
                  <View style={styles.infoArea}>
                    <Text style={styles.infoTitle}>{mission.name}</Text>
                    <Text style={styles.infoSub}>{mission.date_mission}</Text>
                    <Text style={styles.infoAvailability}>
                      <Text style={styles.infoAmount}>Location:{mission.location} </Text>
                    </Text>
                  </View>
                  <View style={styles.imageArea}>
                    <Image
                      source={getImage(mission.id)}
                      resizeMode="contain"
                      style={styles.missionImage}
              />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        </View>
        </SafeAreaView>
  )
}

export default Mission;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconStyle: {
    width: 30,
  },
  faceIconStyle: {
    height: 40,
    width: 40,
    borderRadius: 999,
    borderWidth: 2,  
  },

  titleSection: {
    marginTop: 15,
    flexDirection: 'row',
  },

  title: {
    fontSize: 32,
    fontWeight: "600",
  },

  button: {
    backgroundColor: '#f08700',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 60,
    left:100,
    
  },

  searchSection: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "center",
  },
  searchPallet: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    borderRadius: 8,
    width: "100%",
    height: 30,
    backgroundColor: "white",
  },
  searchInput: {
    width: 245,
    height: 30,

    backgroundColor: "white",
  },
  searchIconArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  magnifyingIconStyle: {
    width: 24,
    height: 24,
    marginRight: -10,
  },



  typesSection: {
    marginTop: 15,
    flexDirection: "row",
  },
  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: "bold",
    color: "black",
  },
  typesText: {
    fontSize: 15,
    marginRight: 33,
    fontWeight: "500",
    color: "#696969",
  },

  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  elementPallet: {
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    width: "110%",
    height: 450,
  },
  element: {
    height: 100,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 13,
  },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoSub: {
    fontSize: 11,
    fontWeight: "600",
    color: "#696969",
  },
  infoAvailability: {
    position: "absolute",
    bottom: 0,
    fontSize: 10,
    color: "#696969",
    fontWeight: "bold",
  },
  infoAmount: {
    fontSize: 12,
    color: "black",
    fontWeight: "600",
  },
  imageArea: {
    flex: 1,
  },
  missionImage: {
    position: "absolute",
    top: -15,
    left: -15,
    width: "140%",
    height: "140%",
  },



})


*/}