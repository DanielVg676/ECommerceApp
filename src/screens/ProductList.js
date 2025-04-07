import { React } from "react";
import { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProductCard from '../components/ProductCard'
import { Button, Modal } from "react-native";

const products = [
    {id: '1', name: 'Smartphone', price: '$199', description:'Producto de ejemplo con una descripcion de ejemplo, aqui se puede agregar mas texto', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4jwQIwk_Gt35Plzfu-wfsxh0Sxt4vF1rbQ&s'},
    {id: '2', name: 'Laptop', price: '$999', description:'Segunda descripcion del segundo producto adadjkasdhjasfghasfhgoaf', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4jwQIwk_Gt35Plzfu-wfsxh0Sxt4vF1rbQ&s'},
    {id: '3', name: 'Headphones', price: '$59', description:'Tercera descripcion del tercer producto seleccionado adasdasdasd', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4jwQIwk_Gt35Plzfu-wfsxh0Sxt4vF1rbQ&s'},
    {id: '4', name: 'Smartphones', price: '$149', description:'cuarta descripcion del ultimo producto seleccionado sdasasasfasfsfasf', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4jwQIwk_Gt35Plzfu-wfsxh0Sxt4vF1rbQ&s'},
];

const ProductList = () => {
    const [ cart, setCart ] = useState([]);
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ selectedProduct, setSelectedProduct ] = useState(null);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} agregado al carrito.`)
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
            <Text style={styles.sectionTitle}>Lista de productos</Text>
            <FlatList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            />
            {selectedProduct && (
                <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image
                                source = {{ uri: selectedProduct.imageUrl }}
                                style = {styles.productImage}
                            />
                            <Text style={styles.productName}>{selectedProduct.name}</Text>
                            <Text style={styles.productPrice}>{selectedProduct.price}</Text>
                            <Text style={styles.productDescription}>{selectedProduct.description}</Text>

                            <TouchableOpacity onPress={() => { handleAddToCart(selectedProduct); setModalVisible(false); }} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Agregar al carrito</Text>
                            </TouchableOpacity>
                            
                            {/* <View style={{ width: '80%', marginBottom: 10 }}>
                                <Button
                                    title="Agregar al carrito"
                                    color="#ffffff"
                                    backgroundColor="#ffffff"
                                    onPress={() => {
                                        handleAddToCart(selectedProduct);
                                        setModalVisible(false);
                                    }}
                                />
                            </View> */}
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#ebe6e5',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#ebe6e5',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    productImage: {
        width: 200,
        height: 200,
        borderRadius: 15,
        marginBottom: 20,
        borderColor: "#bcbcbc",
        borderWidth: 3,
    },
    productName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000', // Nombre del producto
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 18,
        color: '#af9c98', // Precio del producto
        marginBottom: 10
    },
    productDescription: {
        fontSize: 16,
        color: '#657275', // Descripción
        marginBottom: 20,
        textAlign: 'center'
    },
    modalButton: {
        marginBottom: 10,
    },
    closeButton:{
        width: '80%',
        backgroundColor: '#af9c98',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    closeButtonText:{
        color: "#ffffff",
        fontWeight: 'bold',
    },
})

export default ProductList;
