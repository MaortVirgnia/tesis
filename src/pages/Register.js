import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Modal, TouchableOpacity } from 'react-native';
import axios from 'axios'; 

const Register = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('masculino');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasHeartCondition, setHasHeartCondition] = useState(false);
    const [birthDate, setBirthDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleRegister = async () => { 
        const data = {
            firstName,
            lastName,
            age,
            gender,
            hasHeartCondition,
            birthDate,
            email,
            password,
            
        };
        try {
            const response = await axios.post('https://n8mtbgjq-3000.use2.devtunnels.ms/data', data);
            Alert.alert('Enviado', 'Configuraciones enviadas correctamente');
            console.log(response.data);
            navigation.replace('Login'); 
        } catch (error) {
            Alert.alert('Error', 'Hubo un error al enviar las configuraciones');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Edad"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
            />
            <TextInput
                style={styles.input}
                placeholder="email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="pasword"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Text style={styles.label}>Sexo:</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.dropdown}>
                <Text>{gender === 'masculino' ? 'Masculino' : 'Femenino'}</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Selecciona tu sexo:</Text>
                    <TouchableOpacity onPress={() => { setGender('masculino'); setModalVisible(false); }}>
                        <Text style={styles.optionText}>Masculino</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setGender('femenino'); setModalVisible(false); }}>
                        <Text style={styles.optionText}>Femenino</Text>
                    </TouchableOpacity>
                    <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
            <Text style={styles.label}>¿Padece de una enfermedad cardíaca?</Text>
            <TouchableOpacity onPress={() => setHasHeartCondition(!hasHeartCondition)} style={styles.dropdown}>
                <Text>{hasHeartCondition ? 'Sí' : 'No'}</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Fecha de Nacimiento:</Text>
            <TextInput
                style={styles.input}
                placeholder="YYYY-MM-DD"
                value={birthDate}
                onChangeText={setBirthDate}
            />
            <Button title="Registrar" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    label: {
        marginTop: 12,
        marginBottom: 6,
    },
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        paddingHorizontal:  8,
        marginBottom: 12,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    optionText: {
        marginVertical: 10,
        fontSize: 18,
    },
});

export default Register;