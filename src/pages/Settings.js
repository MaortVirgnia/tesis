import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Settings = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [nightModeEnabled, setNightModeEnabled] = useState(false);
    const [estadoEnabled, setEstadoEnabled] = useState(false);

    const submitSettings = async () => {
        const data = {
            name,
            age,
            gender,
            height,
            weight,
        };

        try {
            const response = await axios.post('https://n8mtbgjq-3000.use2.devtunnels.ms/data', data);
            Alert.alert('enviado', 'Configuraciones enviadas correctamente');
            console.log(response.data);
        } catch (error) {
            Alert.alert('Error', 'Hubo un error al enviar las configuraciones');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configuraciones</Text>

            <Text>Nombre:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <Text>Edad:</Text>
            <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />

            <Text>Sexo:</Text>
            <TextInput
                style={styles.input}
                value={gender}
                onChangeText={setGender}
            />

            <Text>Altura (cm):</Text>
            <TextInput
                style={styles.input}
                value={height}
                onChangeText={setHeight}
                keyboardType="numeric"
            />

            <Text>Peso (kg):</Text>
            <TextInput
                style={styles.input}
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
            />

            <View style={styles.switchContainer}>
                <Text>Activar Notificaciones:</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={setNotificationsEnabled}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>Modo Noche:</Text>
                <Switch
                    value={nightModeEnabled}
                    onValueChange={setNightModeEnabled}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>Preguntar estado:</Text>
                <Switch
                    value={estadoEnabled}
                    onValueChange={setEstadoEnabled}
                />
            </View>

            <Button title="Enviar" onPress={submitSettings} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
});

export default Settings;