import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet} from 'react-native';



function Home (props) {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>bienvenido</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 20,
        marginBottom: 20,
    },

});

export default Home;