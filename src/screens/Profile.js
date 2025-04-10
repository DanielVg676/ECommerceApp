import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleNameChange = (text) => setName(text);
    const handleEmailChange = (text) => setEmail(text);

    const pickImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            Alert.alert('Permiso requerido', 'Se necesita acceso a la galería para seleccionar una imagen.');
            return;
        }
        
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
        
        if (!pickerResult.canceled && pickerResult.assets.length > 0) {
            setImage(pickerResult.assets[0].uri);
            Alert.alert('Imagen actualizada', 'Tu imagen de perfil ha sido cambiada.');
        }
        
    };

    const handleSave = () => {
        Alert.alert('Perfil actualizado', 'Se han guardado los cambios.');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.profileImage} />
                ) : (
                    <Ionicons name="person-circle" size={120} color="#2c3e50" />
                )}
                <Ionicons name="camera" size={24} color="white" style={styles.cameraIcon} />
            </TouchableOpacity>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input} value={name} onChangeText={handleNameChange} placeholder="Ingrese su nombre" />
            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput style={styles.input} value={email} onChangeText={handleEmailChange} placeholder="Ingrese su correo" keyboardType="email-address" />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Guardar Cambios</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '##ebe6e5',
        padding: 20,
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: '#27ae60',
        padding: 6,
        borderRadius: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#dcdcdc',
    },
    saveButton: {
        backgroundColor: '#af9c98',
        padding: 12,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});


const styless = StyleSheet.create({
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