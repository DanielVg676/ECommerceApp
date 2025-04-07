import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <View style={styles.card}>
            <Image source={product.imageUrl} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onAddToCart(product)}
            >
                <Text style={styles.buttonText}>Agregar al carrito</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff', // Fondo suave
        margin: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50', // Texto oscuro y elegante
        textAlign: 'center',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: '#27ae60', // Verde para el precio (armonioso con productos)
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#6b4226', // Azul para el botón (consistente con pantalla de inicio)
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 14,
        color: '#fff', // Texto blanco para contraste
        fontWeight: 'bold',
    },
});

export default ProductCard;
