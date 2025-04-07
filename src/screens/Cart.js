import { React, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Button, Image } from 'react-native';

const Cart = () => {
    const [cart, setCart] = useState([
        { id: '1', name: 'Smartphone', price: 199, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4jwQIwk_Gt35Plzfu-wfsxh0Sxt4vF1rbQ&s' },
        { id: '2', name: 'Tablet', price: 299, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4jwQIwk_Gt35Plzfu-wfsxh0Sxt4vF1rbQ&s' },
        { id: '3', name: 'Auriculares', price: 99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4jwQIwk_Gt35Plzfu-wfsxh0Sxt4vF1rbQ&s' }
    ]);

    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        Alert.alert('Producto Eliminado', 'El producto ha sido eliminado del carrito');
    }

    const calculateTotal = () => {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        return total.toFixed(2);
    };

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrito de compras</Text>
            {cart.length === 0 ? (
                <Text style={styles.emptyCartText}>Tu carrito está vacío</Text>
            ) : (
                <FlatList data={cart} renderItem={renderCartItem} keyExtractor={item => item.id} />
            )}

            {cart.length > 0 && (
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
                    <Button title="Proceder a la compra" onPress={() => alert('Procediendo a la compra')} color="#657275" />
                </View>
            )}
        </View>
    );
}

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
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
        borderColor: "#bcbcbc",
        borderWidth: 2,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#657275',
    },
    productPrice: {
        fontSize: 14,
        color: '#af9c98',
    },
    removeButton: {
        backgroundColor: '#af9c98',
        padding: 10,
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
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
