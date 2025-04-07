import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";

const { width } = Dimensions.get("window");


const categorias = [
    {
      id: "1",
      title: "Frutos Secos Naturales",
      imagenUrl: "https://images.unsplash.com/photo-1543158181-1274e5362710?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      title: "Frutos Secos Tostados",
      imagenUrl: "https://images.unsplash.com/photo-1585536301151-2afb2fb1c960?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      title: "Frutas Deshidratadas",
      imagenUrl: "https://plus.unsplash.com/premium_photo-1669381244401-29d6ca9d5742?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      title: "Semillas",
      imagenUrl: "https://images.unsplash.com/photo-1542990253-a781e04c0082?q=80&w=2594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
  const carouselImages = [
    "https://images.unsplash.com/photo-1543158181-1274e5362710?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585536301151-2afb2fb1c960?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542990253-a781e04c0082?q=80&w=2594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600189020840-e9918c25269d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJ1dG9zJTIwc2Vjb3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZydXRvcyUyMHNlY29zfGVufDB8fDB8fHww",
  ];
  
const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <ScrollView style={styles.container}>
      <Animatable.View animation="fadeInDown" duration={1000} style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>🌰 ¡Bienvenido a FrutoSeko!</Text>
        <Text style={styles.welcomeSubText}>Los mejores frutos secos importados</Text>
      </Animatable.View>

      <Text style={styles.sectionTitle}>🌟 Explora nuestras categorías</Text>
      <FlatList
        data={categorias}
        renderItem={({ item, index }) => (
          <Animatable.View animation="fadeInUp" delay={index * 150} style={styles.categoryItem}>
            <Image source={{ uri: item.imagenUrl }} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </Animatable.View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      />

      <Text style={styles.sectionTitle}>🖼️ Galería de imágenes</Text>
      <View style={styles.carouselContainer}>
        <TouchableOpacity onPress={goToPrevImage} style={styles.carouselButtonLeft}>
          <Text style={styles.carouselButtonText}>{"‹"}</Text>
        </TouchableOpacity>
        <Animatable.Image
          animation="zoomIn"
          duration={800}
          source={{ uri: carouselImages[currentImage] }}
          style={styles.carouselImage}
        />
        <TouchableOpacity onPress={goToNextImage} style={styles.carouselButtonRight}>
          <Text style={styles.carouselButtonText}>{"›"}</Text>
        </TouchableOpacity>
        <View style={styles.indicatorContainer}>
          {carouselImages.map((_, i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                currentImage === i ? styles.activeIndicator : {},
              ]}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebe6e5'",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  welcomeContainer: {
    backgroundColor: "#ffe4b5",
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 25,
    marginBottom: 25,
    alignItems: "center",
    shadowColor: "#ffb347",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "800",
    color: "#8b4513",
    textAlign: "center",
    marginBottom: 10,
  },
  welcomeSubText: {
    fontSize: 16,
    color: "#6b4226",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4b2e2e",
    marginBottom: 15,
    textAlign: "center",
  },
  categoriesContainer: {
    paddingLeft: 10,
    paddingBottom: 30,
  },
  categoryItem: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginRight: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#5a3e36",
    textAlign: "center",
  },
  carouselContainer: {
    alignItems: "center",
    marginBottom: 30,
    position: "relative",
  },
  carouselImage: {
    width: width * 0.85,
    height: 200,
    borderRadius: 20,
  },
  carouselButtonLeft: {
    position: 'absolute',
    top: '45%',
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 30,
    zIndex: 1,
  },
  carouselButtonRight: {
    position: 'absolute',
    top: '45%',
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 30,
    zIndex: 1,
  },
  carouselButtonText: {
    fontSize: 22,
    color: "#fff",
  },
  indicatorContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#d3cfcf",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#a0522d",
    width: 12,
    height: 12,
  },
});

export default Home;
