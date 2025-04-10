import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Por favor ingresa todos los campos');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://userspf-production.up.railway.app/users/login', {
        username,
        password,
      });

      setLoading(false);

      if (response.status === 200) {
        Alert.alert('Éxito', 'Inicio de sesión exitoso');
        console.log('Datos:', response.data);
        // Aquí podrías navegar a otra pantalla o guardar el token
        navigation.replace("Main");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      Alert.alert('Error', 'Credenciales inválidas o problema de conexión');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setUsername}
        value={username}
      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        style={styles.input}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 32,
    alignSelf: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
};
