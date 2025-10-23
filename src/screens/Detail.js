import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from '../components/Navbar';

const { width } = Dimensions.get('window');

const Detail = ({ route, navigation }) => {
  const { produk } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView style={styles.scrollContainer}>
        <Image source={{ uri: produk.gambar }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.nama}>{produk.namaProduk}</Text>
          <Text style={styles.harga}>
            Rp {produk.hargaProduk.toLocaleString('id-ID')}
          </Text>
          <View style={styles.stokContainer}>
            <Text style={styles.stokText}>
              Stok Tersisa: {produk.stok}
            </Text>
          </View>
          
          <Text style={styles.subHeader}>Deskripsi Produk</Text>
          <Text style={styles.deskripsi}>{produk.deskripsiProduk}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>+ Tambah ke Keranjang</Text>
        </TouchableOpacity>
      </ScrollView>
      <Navbar navigation={navigation} /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
  },
  nama: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  harga: {
    fontSize: 24,
    fontWeight: '700',
    color: '#e67e22',
    marginBottom: 20,
  },
  stokContainer: {
    backgroundColor: '#f4f4f4',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
    marginBottom: 20,
  },
  stokText: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  deskripsi: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  buyButton: {
    marginHorizontal: 20,
    marginBottom: 30,
    backgroundColor: 'tomato',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Detail;