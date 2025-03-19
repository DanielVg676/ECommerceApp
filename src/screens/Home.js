import { React } from "react";
import { View, Text } from 'react-native';

const categorias = [
    { id: '1', title:'Electronica', imagenUrl: ''},
    { id: '2', title:'Ropa', imagenUrl: ''},
    { id: '3', title:'Muebles', imagenUrl: ''},
    { id: '4', title:'Juguetes', imagenUrl: ''},
];

const Home = () => {
    return (
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Pantalla de Inicio</Text>
        </View>
    )
}

export default Home;