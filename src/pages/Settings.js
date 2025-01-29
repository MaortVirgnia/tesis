import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Settings = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [nightModeEnabled, setNightModeEnabled] = useState(false);
    const [estadoEnabled, setEstadoEnabled] = useState(false);

    const submitSettings = async () => {
        const data = {
            notificationsEnabled,
            nightModeEnabled,
            estadoEnabled,
        };

        try {
            const response = await axios.post('https://n8mtbgjq-3000.use2.devtunnels.ms/data', data);
            Alert.alert('enviado', 'ajustes enviados correctamente');
            console.log(response.data);
        } catch (error) {
            Alert.alert('Error', 'Hubo un error al enviar los ajustes');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ajustes</Text>

            
            <Text style={styles.tittle}>exportar datos como archivo</Text>
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
            <Button color="#45aeb5" title="Enviar" onPress={submitSettings} />
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