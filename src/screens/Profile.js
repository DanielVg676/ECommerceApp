import { React, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
    const [name, setName ] = useState('Prueba Ejemplo');
    const [email, setEmail] = useState('prueba@example.com');
    const [image, setImage ] = useState('https://preview.redd.it/3wlrfietzzq31.jpg?width=640&crop=smart&auto=webp&s=fac76e26c430a104b182b73389c5ca0d951d46d8')

    const handleNameChange = (text) => {
        setName(text);
    }

    const handleEmailChange = (text) => {
        setEmail(text);
    }

    const handleChangeProfileImage = async () => {
        const permissionResult = await ImagePicker.
    
    requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Se necesitan permisos para acceder a la galeria');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        console.log ("Resultado de la seleccion de la imagen: ", result);

        if (!result.canceled) {
            const imageUri = result.assets[0].uri;
            console.log("Imagen seleccionada URI: ", imageUri);
            setImage(imageUri);
            Alert.alert('Imagen actualizada', 'Tu imagen de perfil ha sido actualizada');
        }
    };

    const handleSaveChanges = () => {
        Alert.alert('Cambios guardados', 'Tu perfil ha sido actualizado')
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileImageContainer}>
                <Image source={{uri: image}} style={styles.profileImage}></Image>
                <TouchableOpacity onPress={handleChangeProfileImage} style={styles.changeImageButton}>
                    <Text style={styles.changeImageText}>Cambiar Imagen</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputContent}>
                <Text style={styles.label}>Cambiar Nombre: </Text>
                <TextInput style={styles.input} value={name} onChangeText={handleNameChange}/>
            </View>
            <View style={styles.inputContent}>
                <Text style={styles.label}>Correo Electronico: </Text>
                <TextInput style={styles.input} value={email} onChangeText={handleEmailChange}/>
            </View>

            <TouchableOpacity onPress={() => handleSaveChanges()} style={styles.changeButton}>
                    <Text style={styles.changeButtonText}>Guardar cambios</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebe6e5',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    profileImageContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 125,
      height: 125,
      borderRadius: 62,
      marginBottom: 10,
      borderColor: "#bcbcbc",
      borderWidth: 3,
    },
    changeImageButton: {
        backgroundColor: '#af9c98',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    changeImageText: {
      color: 'white',
      fontWeight: 'bold',
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderColor: '#a3a3a3',
      borderBottomWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
      marginBottom: 12,
    },
    changeButton:{
        width: '55%',
        backgroundColor: '#af9c98',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
        alignSelf: 'center',
    },
    changeButtonText:{
        color: "#ffffff",
        fontWeight: 'bold',
    },
    inputContent:{
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 8,
        marginBottom: 15,
    }
  });
  

export default Profile;