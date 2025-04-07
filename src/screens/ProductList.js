import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Button, Image } from 'react-native';
import ProductCard from '../components/ProductCard'; // Asegúrate de que este archivo exista en tu proyecto.
import images from '../../assets/images';

const products = [
    { id: '1', name: 'Camarones', price: '$99', imageUrl: images.camarones, description: 'Camarones secos con un sabor estupendo para platillos gourmet.' },
    { id: '2', name: 'Mangos', price: '$89', imageUrl: images.mangos, description: 'Mangos enchilados con el mejor sabor de durango' },
    { id: '3', name: 'Almendras', price: '$59', imageUrl: images.almendras, description: 'Almendras de alta calidad, ricas en nutrientes.' },
    { id: '4', name: 'Pistaches', price: '$49', imageUrl: images.pistaches, description: 'Pistaches crujientes con un sabor exquisito.' },
];


const ProductList = () => {
    const [cart, setCart] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} agregado al carrito.`);
    };

    const handleShowProductDetail = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const renderProductItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleShowProductDetail(item)}>
            <ProductCard product={item} onAddToCart={handleAddToCart} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Productos Disponibles</Text>
            <FlatList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            />
            {selectedProduct && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            {/* Cambiar el uso de 'uri' por una referencia directa */}
                            <Image source={selectedProduct.imageUrl} style={styles.productImage} />
                            <Text style={styles.productName}>{selectedProduct.name}</Text>
                            <Text style={styles.productPrice}>{selectedProduct.price}</Text>
                            <Text style={styles.productDescription}>
                                {selectedProduct.description}
                            </Text>
                            <Button
                                title="Agregar al carrito"
                                onPress={() => {
                                    handleAddToCart(selectedProduct);
                                    setModalVisible(false);
                                }}
                            />
                            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebe6e5',
        paddingHorizontal: 10,
        paddingTop: 10,
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '80%',
        alignItems: 'center',
    },
    productImage: {
        width: 200,
        height: 200,
        borderRadius: 15,
        marginBottom: 20,
    },
    productName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 18,
        color: '#625dff',
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default ProductList;
