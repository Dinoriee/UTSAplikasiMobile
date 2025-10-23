import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from "../components/Navbar";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#fff7f7ff', '#acffccff']}
        start={{x:0, y:0.3}}
        end={{x:0, y:0}}
        style={StyleSheet.absoluteFillObject}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.profileHeader}>
            <Image 
              source={require('../../assets/icon.png')} 
              style={styles.avatar} 
            />
            <Text style={styles.userName}>Dino</Text>
            <Text style={styles.userHandle}>@dino.dev</Text>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("About")}>
              <Text style={styles.optionText}>About</Text>
              <Text style={styles.arrowText}>&gt;</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.optionButton, { marginTop: 20 }]}>
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userHandle: {
    fontSize: 16,
    color: 'gray',
  },
  optionsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  optionButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  arrowText: {
    fontSize: 16,
    color: 'gray',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF3B30',
    textAlign: 'center',
    width: '100%',
  },
});

export default Profile;