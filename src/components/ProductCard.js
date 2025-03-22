import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductCard = ({ product, onAddToCart }) => {
    return(
        <View style={styles.card}>
            <Image source={{ uri: product.imageUrl}}  style={styles.productImage}/>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(product)}>
                <Text style={styles.addButtonText}>Agregar al carrito</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '90%'
    },
    productImage: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    addButton: {
        backgroundColor: '#625dff',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
})

export default ProductCard;