import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import { useKatalog } from '../screens/KatalogContext';

const { width } = Dimensions.get('window');

const Card = ({ title, description, image }) => (
  <View style={styles.card}>
    <View style={styles.cardTitleContainer}>
      <Image source={image} style={{ width: 40, height: 40, }} />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <View style={styles.cardDescContainer}>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  </View>
);


const Home = ({ navigation }) => {
  const { katalogs } = useKatalog();

const MENU_DATA = [
    {
        id: 'menu1',
        title: 'Promo',
        icon: require('../../assets/icon/promo.png'), 
        targetScreen: 'Promo',
    },
    {
        id: 'menu2',
        title: 'Isi Ulang',
        icon: require('../../assets/icon/Top Up.png'),
        targetScreen: 'IsiUlang',
    },
    {
        id: 'menu3',
        title: 'Tagihan',
        icon: require('../../assets/icon/Pulsa.png'),
        targetScreen: 'Tagihan',
    },
    {
        id: 'menu4',
        title: 'Katalog',
        icon: require('../../assets/icon/Katalog.png'),
        targetScreen: 'Katalog',
    },
    {
        id: 'menu5',
        title: 'Alat Dapur',
        icon: require('../../assets/icon/Alat dapur.png'),
        targetScreen: 'KategoriDapur',
    },
    {
        id: 'menu6',
        title: 'Rumah Tangga',
        icon: require('../../assets/icon/Rumah tangga.png'),
        targetScreen: 'KategoriRT',
    },
    {
        id: 'menu7',
        title: 'Voucher',
        icon: require('../../assets/icon/Voucher.png'),
        targetScreen: 'Voucher',
    },
    {
        id: 'menu8',
        title: 'Lainnya',
        icon: require('../../assets/icon/Lainnya.png'),
        targetScreen: 'SemuaKategori',
    },
];

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
          <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Discover</Text>
          <Text style={{ fontSize: 16, fontWeight: '300', color: 'gray' }}>Based on your recent search</Text>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={MENU_DATA}
          renderItem={({ item }) => <TouchableOpacity><Card title={item.title} image={item.icon} /></TouchableOpacity>}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 10, }}
        />

        <View style={styles.katalogContainer}>
          <Text style={styles.katalogTitle}>Katalog Produk</Text>
          <View style={styles.katalogGrid}>
            {katalogs.map((item) => (
              <TouchableOpacity key={item.id} style={styles.katalogCard}  onPress={() => navigation.navigate('Detail', {produk: item})}>
                <Image source={{ uri: item.gambar }} style={styles.katalogImage} />
                <View style={styles.katalogCardContent}>
                  <Text style={styles.katalogCardTitle} numberOfLines={1}>{item.namaProduk}</Text>
                  <Text style={styles.katalogCardDesc} numberOfLines={2}>
                    {item.deskripsiProduk}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.popularContainer}>
          <Text style={{marginBottom: 20, fontSize: 32, fontWeight: 'bold'}}>Popular</Text>
          <View style={styles.popularListContainer}>

            <TouchableOpacity>
              <View style={styles.popularContent}>
              <Image source={require("../../assets/sapu.png")} style={{ width: 85, height: 85, borderRadius: 20 }} />
              <View style={styles.popularDescContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Perabotan</Text>
                <Text style={{color: 'gray'}}>Perabotan populer minggu ini!</Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.popularContent}>
              <Image source={require("../../assets/kursikantor.jpg")} style={{ width: 85, height: 85, borderRadius: 20 }} />
              <View style={styles.popularDescContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Alat Kantor</Text>
                <Text style={{color: 'gray'}}>Penjualan tinggi minggu ini!</Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.popularContent}>
              <Image source={require("../../assets/baju.jpg")} style={{ width: 85, height: 85, borderRadius: 20 }} />
              <View style={styles.popularDescContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Warddrobe</Text>
                <Text style={{color: 'gray'}}>Baju baru tampilan baru!</Text>
              </View>
            </View>
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
    paddingBottom: 20,
  },
  textContainer: {
    padding: 20,
  },
  card: {
    width: 120,
    padding: 20,
    flexDirection: 'column',
    borderRadius: 20,
    alignItems: 'center',
  },
  cardTitleContainer: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  popularContainer: {
    padding: 20,
  },
  popularListContainer: {
    flexDirection: 'column',
    gap: 15,
  },
  popularContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  popularDescContainer: {
    justifyContent: 'center',
    gap: 5,
  },
  katalogContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  katalogTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  katalogGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  katalogCard: {
    width: (width - 16 * 2 - 10) / 2, 
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    overflow: 'hidden',
  },
  katalogImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  katalogCardContent: {
    padding: 12,
  },
  katalogCardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  katalogCardDesc: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
});
  
export default Home;