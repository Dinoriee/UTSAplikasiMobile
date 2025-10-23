import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    Alert
} from "react-native";
import { useKatalog } from '../screens/KatalogContext';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";

const TambahProduk = ({ navigation, route }) => {

    const { produkYangAkanDiedit } = route.params || {};
    const isEditMode = !!produkYangAkanDiedit;
    const { tambahProduk, updateProduk } = useKatalog();
    const [namaProduk, setNamaProduk] = useState(isEditMode ? produkYangAkanDiedit.namaProduk : "");
    const [jenisProduk, setJenisProduk] = useState(isEditMode ? produkYangAkanDiedit.jenisProduk : "");
    const [deskripsiProduk, setDeskripsiProduk] = useState(isEditMode ? produkYangAkanDiedit.deskripsiProduk : "");
    const [hargaProduk, setHargaProduk] = useState(isEditMode ? produkYangAkanDiedit.hargaProduk.toString() : "");
    const [stok, setStok] = useState(isEditMode ? produkYangAkanDiedit.stok.toString() : "");
    const [gambar, setGambar] = useState(isEditMode ? produkYangAkanDiedit.gambar : null);


    const pilihGambar = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Maaf, kami butuh izin untuk mengakses galeri Anda!');
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaType.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setGambar(result.assets[0].uri);
        }
    };
    function handleSubmit() {
        if (!namaProduk || !hargaProduk || !stok) {
            alert('Nama, Harga, dan Stok wajib diisi!');
            return;
        }
        const dataForm = {
            namaProduk: namaProduk,
            jenisProduk: jenisProduk,
            deskripsiProduk: deskripsiProduk,
            hargaProduk: hargaProduk,
            stok: stok,
            gambar: gambar
        };
        if (isEditMode) {
            updateProduk(produkYangAkanDiedit.id, dataForm);
            Alert.alert('Sukses', 'Produk berhasil diperbarui!');
        } else {
            tambahProduk(dataForm);
            Alert.alert('Sukses', 'Produk berhasil ditambahkan!');
        }
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContainer}
            >
                <Text style={styles.header}>
                    {isEditMode ? 'Edit Produk' : 'Tambah Produk Baru'}
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nama Produk"
                    value={namaProduk}
                    onChangeText={setNamaProduk}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Jenis Produk"
                    value={jenisProduk}
                    onChangeText={setJenisProduk}
                />
                <TextInput
                    style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
                    placeholder="Deskripsi Produk"
                    value={deskripsiProduk}
                    onChangeText={setDeskripsiProduk}
                    multiline
                />
                <TextInput
                    style={styles.input}
                    placeholder="Harga Produk"
                    value={hargaProduk}
                    onChangeText={setHargaProduk}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Stok"
                    value={stok}
                    onChangeText={setStok}
                    keyboardType="numeric"
                />
                <View style={{ marginBottom: 15 }}>
                    <Button title="Pilih Gambar Produk" onPress={pilihGambar} />
                </View>
                {gambar && (
                    <Image 
                        source={{ uri: gambar }}
                        style={styles.previewGambar} 
                    />
                )}
                <Button 
                    title={isEditMode ? 'Simpan Perubahan' : 'Simpan Produk'} 
                    onPress={handleSubmit} 
                />
                
            </ScrollView>

            <Navbar navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    scrollContainer: {
        padding: 20,
        paddingBottom: 40, 
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        marginBottom: 15,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
    },
    previewGambar: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd'
    }
});

export default TambahProduk;