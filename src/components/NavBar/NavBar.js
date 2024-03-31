import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import oneTech from '../../assets/onetech.png';

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.container}>
        <Image source={oneTech} style={styles.logo} />
        <View style={styles.navItems}>
          <Text style={styles.navLink}>Log in</Text>
          <Text style={styles.navLink}>Sign up</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'grey', // Vous pouvez changer la couleur de fond selon vos préférences
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 100, // Changer les dimensions de l'image selon vos besoins
    height: 50,
  },
  navItems: {
    flexDirection: 'row',
  },
  navLink: {
    marginHorizontal: 10,
  },
});

export default NavBar;
