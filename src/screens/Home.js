import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native";


const categorias = [
    { id: '1', title: 'Electronica', imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4jwQIwk_Gt35Plzfu-wfsxh0Sxt4vF1rbQ&s' },
    { id: '2', title: 'Ropa', imagenUrl: 'https://static.wikia.nocookie.net/gatopedia/images/2/2e/El_gatoo.png/revision/latest?cb=20230103150310&path-prefix=es' },
    { id: '3', title: 'Muebles', imagenUrl: 'https://i.redd.it/krd7xsbs9dvc1.jpeg' },
    { id: '4', title: 'Juguetes', imagenUrl: 'https://preview.redd.it/3wlrfietzzq31.jpg?width=640&crop=smart&auto=webp&s=fac76e26c430a104b182b73389c5ca0d951d46d8' },
];

const carouselImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4jwQIwk_Gt35Plzfu-wfsxh0Sxt4vF1rbQ&s',
    'https://static.wikia.nocookie.net/gatopedia/images/2/2e/El_gatoo.png/revision/latest?cb=20230103150310&path-prefix=es',
    'https://i.redd.it/krd7xsbs9dvc1.jpeg',
];

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const goToNextImage = () => {
        if (currentImage < carouselImages.length - 1) {
            setCurrentImage(currentImage + 1);
        } else {
            setCurrentImage(0);
        }
    };

    const goToPrevImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        } else {
            setCurrentImage(carouselImages.length - 1);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>
                    Bienvenido a nuestro E-commerce!
                </Text>
                <Text style={styles.welcomeSubText}>¡Ofertas increíbles te esperan!</Text>
            </View>

            <Text style={styles.sectionTitle}>Explora nuestras categorias</Text>
            <FlatList
                data={categorias}
                renderItem={({ item }) => (
                    <View style={styles.categoryItem}>
                        <Image source={{ uri: item.imagenUrl }} style={styles.categoryImage} />
                        <Text style={styles.categoryTitle}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesContainer}
            />

            <Text style={styles.sectionTitle}>Galería de imágenes</Text>
            <View style={styles.carouselContainer}>
                <TouchableOpacity onPress={goToPrevImage} style={styles.carouselButtonLeft}>
                    <Text style={styles.carouselButtonText}>{"<"}</Text>
                </TouchableOpacity>
                <Image source={{ uri: carouselImages[currentImage] }} style={styles.carouselImage} />
                <TouchableOpacity onPress={goToNextImage} style={styles.carouselButtonRight}>
                    <Text style={styles.carouselButtonText}>{">"}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    categoryItem: {
        alignItems: "center",
        marginRight: 20,
    },
    categoryImage: {
        width: 110,
        height: 110,
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#ddd",
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#656568",
    },
    categoriesContainer: {
        marginBottom: 30,
    },
    carouselContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: 30,
    },
    carouselImage: {
        width: 300,
        height: 150,
        borderRadius: 15,
    },
    carouselButtonLeft: {
        position: 'absolute',
        top: '50%',
        left: 10,
        transform: [{ translateY: -20 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 15,
        borderRadius: 50,
        zIndex: 1,
    },
    carouselButtonRight: {
        position: 'absolute',
        top: '50%',
        right: 10,
        transform: [{ translateY: -20 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 15,
        borderRadius: 50,
        zIndex: 1,
    },
    carouselButtonText: {
        color: 'white',
        fontSize: 24,
    },
    welcomeContainer: {
        backgroundColor: "#62d5ff",
        borderRadius: 15,
        paddingVertical: 25,
        paddingHorizontal: 20,
        marginBottom: 20,
        alignItems: "center",
        marginInline: 10
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5,
    },
    welcomeSubText: {
        fontSize: 18,
        color: "white",
        fontWeight: "500",
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "600",
        color: "#333",
        marginBottom: 10,
        marginInline: 10
    },
});

export default Home;
