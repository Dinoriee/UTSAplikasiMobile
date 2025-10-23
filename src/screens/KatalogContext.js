import React, { createContext, useState, useContext } from 'react';
import { Image } from 'react-native';

const KatalogContext = createContext();

export const KatalogProvider = ({ children }) => {
    const [katalogs, setKatalogs] = useState([
            {
                id: 1,
                namaProduk: 'Sapu Serbaguna',
                jenisProduk: 'Alat Rumah Tangga',
                deskripsiProduk: 'Sapu ijuk berkualitas tinggi...',
                hargaProduk: 25000,
                gambar: Image.resolveAssetSource(require('../../assets/sapu.png')).uri,
                stok: 150
            },
            {
                id: 2,
                namaProduk: 'Pel Lantai Microfiber',
                jenisProduk: 'Alat Rumah Tangga',
                deskripsiProduk: 'Alat pel modern...',
                hargaProduk: 85000,
                gambar: Image.resolveAssetSource(require('../../assets/pel.png')).uri,
                stok: 75
            },
            {
                id: 3,
                namaProduk: 'Spons Cuci Piring (Isi 3)',
                jenisProduk: 'Alat Dapur',
                deskripsiProduk: 'Spons dua sisi...',
                hargaProduk: 12000,
                gambar: Image.resolveAssetSource(require('../../assets/spons.png')).uri,
                stok: 300
            },
            {
                id: 4,
                namaProduk: 'Tempat Sampah Injak 10L',
                jenisProduk: 'Alat Rumah Tangga',
                deskripsiProduk: 'Tempat sampah praktis...',
                hargaProduk: 110000,
                gambar: Image.resolveAssetSource(require('../../assets/sampah.png')).uri,
                stok: 40
            },
            {
                id: 5,
                namaProduk: 'Sabun Cuci Tangan 500ml',
                jenisProduk: 'Perlengkapan Mandi',
                deskripsiProduk: 'Sabun cuci tangan antiseptik...',
                hargaProduk: 22000,
                gambar: Image.resolveAssetSource(require('../../assets/sabun.png')).uri,
                stok: 210
            }
        ]);

    const tambahProduk = (produkBaru) => {
        const defaultImageUri = Image.resolveAssetSource(require('../../assets/icon.png')).uri;
        const dataProdukBaru = {
            id: Date.now(),
            ...produkBaru,
            hargaProduk: parseFloat(produkBaru.hargaProduk),
            stok: parseInt(produkBaru.stok),
            gambar: produkBaru.gambar || defaultImageUri 
        };
        setKatalogs([...katalogs, dataProdukBaru]);
    };

    const hapusProduk = (id) => {
        setKatalogs(prevKatalogs => 
            prevKatalogs.filter(produk => produk.id !== id)
        );
    };

    const updateProduk = (id, dataForm) => {
        setKatalogs(prevKatalogs =>
            prevKatalogs.map(produk => {
                if (produk.id === id) {
                    return {
                        ...produk,
                        ...dataForm,
                        hargaProduk: parseFloat(dataForm.hargaProduk),
                        stok: parseInt(dataForm.stok),
                        gambar: dataForm.gambar || produk.gambar
                    };
                }
                return produk; 
            })
        );
    };

    return (
        <KatalogContext.Provider value={{ katalogs, tambahProduk, hapusProduk, updateProduk }}>
            {children}
        </KatalogContext.Provider>
    );
};

// 4. Buat "Hook" kustom agar gampang dipakai
export const useKatalog = () => {
    return useContext(KatalogContext);
};