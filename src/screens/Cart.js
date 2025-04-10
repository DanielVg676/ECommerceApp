import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import images from '../../assets/images'; // Asegúrate de que esta ruta sea correcta

const Cart = () => {
    const [cart, setCart] = useState([
        { id: '6', name: 'Cacahuate', price: 29, imageUrl: images.cacahuate, quantity: 1 },
        { id: '7', name: 'Chiltepin', price: 35, imageUrl: images.chiltepin, quantity: 1 },
        { id: '8', name: 'Frijol', price: 25, imageUrl: images.frijol, quantity: 2 },
        { id: '11', name: 'Tornachiles', price: 45, imageUrl: images.tornachiles, quantity: 1 }
    ]);

    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        Alert.alert('Producto Eliminado', 'El producto ha sido eliminado del carrito');
    };

    const increaseQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    const calculateTotal = () => {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return total.toFixed(2);
    };

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={item.imageUrl} style={styles.productImage} /> {/* ✅ CAMBIO AQUÍ */}
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        onPress={() => decreaseQuantity(item.id)}
                        style={styles.quantityButton}
                    >
                        <Ionicons name="remove-circle-outline" size={24} color="#af9c98" />
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>{item.quantity}</Text>

                    <TouchableOpacity
                        onPress={() => increaseQuantity(item.id)}
                        style={styles.quantityButton}
                    >
                        <Ionicons name="add-circle-outline" size={24} color="#af9c98" />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => handleRemoveItem(item.id)}
                style={styles.removeButton}
            >
                <Ionicons name="trash-outline" size={24} color="#ffffff" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrito de compras</Text>
            {cart.length === 0 ? (
                <Text style={styles.emptyCartText}>Tu carrito está vacío</Text>
            ) : (
                <FlatList
                    data={cart}
                    renderItem={renderCartItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContent}
                />
            )}

            {cart.length > 0 && (
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
                    <Button
                        title="Proceder a la compra"
                        onPress={() => alert('Procediendo a la compra')}
                        color="#657275"
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebe6e5',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 20,
        textAlign: "center",
    },
    listContent: {
        paddingBottom: 20,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
    },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 5,
        marginRight: 15,
        borderColor: "#bcbcbc",
        borderWidth: 1,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#657275',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 14,
        color: '#af9c98',
        marginBottom: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        padding: 5,
    },
    quantityText: {
        fontSize: 16,
        marginHorizontal: 10,
        minWidth: 20,
        textAlign: 'center',
    },
    removeButton: {
        backgroundColor: '#af9c98',
        padding: 8,
        borderRadius: 5,
        marginLeft: 10,
    },
    totalContainer: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000',
    },
    emptyCartText: {
        fontSize: 18,
        color: '#898989',
        textAlign: 'center',
        marginTop: 50,
    },
});

export default Cart;
