import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";

const About = ({ navigation }) => {
  return (
     <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            
            <Text style={styles.pageTitle}>Tentang Kami</Text>
            <View style={styles.card}>
                <Image 
                    source={require('../../assets/icon.png')}
                    style={styles.avatar} 
                />
                <Text style={styles.name}>Dino Rosalino Yuswanto</Text>
                <Text style={styles.role}>Developer Aplikasi</Text>
            </View>
            <View style={[styles.card, styles.aboutCard]}>
                <Text style={styles.cardTitle}>Tentang Aplikasi Ini</Text>
                <Text style={styles.description}>
Aplikasi Katalog Lokal ini menyediakan berbagai barang kebutuhan Anda. Kami bukan sekadar katalog biasa; kami adalah etalase digital bagi UMKM Indonesia.
                </Text>
                <Text style={styles.description}>
Jelajahi ribuan produk unik yang terkurasi dari bisnis-bisnis lokal di berbagai pelosok negeri. Dengan fitur pencarian canggih dan kategori yang intuitif, menemukan kebutuhan harian atau barang-barang spesial kini jadi lebih mudah, cepat, dan berdampak.
                </Text>
                <Text style={styles.description}>
Setiap pembelian Anda membantu mendukung mimpi dan pertumbuhan ekonomi pengusaha kecil di komunitas kita.
                </Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Kembali</Text>
            </TouchableOpacity>

        </ScrollView>
        <Navbar navigation={navigation} />
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5',
    },
    contentContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 100,
        gap: 15,
    },
    pageTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
    },
    card: {
        width: '100%',
        padding: 25,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    aboutCard: {
        alignItems: 'flex-start',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#e0e0e0',
        marginBottom: 15,
        borderWidth: 3,
        borderColor: 'tomato',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    role: {
        fontSize: 16,
        color: 'gray',
        marginTop: 4,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'left',
        lineHeight: 24,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "tomato", 
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        elevation: 2,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default About;