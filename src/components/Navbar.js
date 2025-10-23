import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navcontainer}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
        <Image source={require("../../assets/home.png")} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Katalog")}>
        <Image source={require("../../assets/category.png")} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("TambahProduk")}>
        <Image source={require("../../assets/plus.png")} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("About")}>
        <Image source={require("../../assets/info.png")} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Profile")}>
        <Image source={require("../../assets/user.png")} style={styles.navIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff7f7ff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  navButton: {
    padding: 10,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

// Export komponen agar bisa diimpor di file lain
export default Navbar;