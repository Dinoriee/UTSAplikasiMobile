import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, Alert } from "react-native";
import Navbar from "../components/Navbar";
import { useKatalog } from './KatalogContext';

const { width } = Dimensions.get('window');

const Katalog = ({ navigation }) => {
  const { katalogs, hapusProduk } = useKatalog();
  const handleHapus = (id) => {
    Alert.alert(
      "Hapus Produk",
      "Apakah Anda yakin ingin menghapus produk ini?",
      [
        {
          text: "Batal",
          style: "cancel"
        },
        { 
          text: "HAPUS", 
          onPress: () => hapusProduk(id),
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#fff7f7ff', '#00ff00']}
        start={{x:0, y: 0.3}}
        end={{x:0, y:0}}
        style={StyleSheet.absoluteFillObject} 
      />

      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Katalog</Text>
          <Text style={{ fontSize: 16, fontWeight: '300', color: 'gray' }}>Edit atau hapus katalog anda</Text>
        </View>

        <View style={styles.katalogContainer}>
          <View style={styles.katalogGrid}>
            {katalogs.map((item) => (
              <View key={item.id} style={styles.katalogCard}>

                <TouchableOpacity 
                  style={styles.cardClickableArea} 
                  onPress={() => navigation.navigate('Detail', {produk: item})}
                >
                  <Image source={{ uri: item.gambar }} style={styles.katalogImage} />
                  <View style={styles.katalogCardContent}>
                    <Text style={styles.katalogCardTitle} numberOfLines={1}>{item.namaProduk}</Text>
                    <Text style={styles.katalogCardDesc} numberOfLines={2}>
                      {item.deskripsiProduk}
                    </Text>
                  </View>
                </TouchableOpacity>

                <View style={styles.actionsContainer}>
                  <TouchableOpacity 
                    style={[styles.actionButton, styles.editButton]}
                    onPress={() => navigation.navigate('TambahProduk', { produkYangAkanDiedit: item })}
                  >
                    <Text style={styles.actionButtonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.actionButton, styles.deleteButton]}
                    onPress={() => handleHapus(item.id)}
                  >
                    <Text style={styles.actionButtonText}>Hapus</Text>
                  </TouchableOpacity>
                </View>

              </View>
            ))}
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
    paddingBottom: 20,
  },
  textContainer: {
    padding: 20,
  },
  katalogContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  katalogGrid: {
    flexDirection: 'column',
  },
  katalogCard: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardClickableArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  katalogImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  katalogCardContent: {
    flex: 1,
    paddingLeft: 15,
  },
  katalogCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  katalogCardDesc: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
  actionsContainer: {
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginVertical: 4,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#3498db',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Katalog;