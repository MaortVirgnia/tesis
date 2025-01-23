import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Modal } from 'react-native';
import { TextInput, Button, TouchableRipple, IconButton } from 'react-native-paper';
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
    const [conditionModalVisible, setConditionModalVisible] = useState(false);
    const [selectedCondition, setSelectedCondition] = useState('');
    
    const heartConditions = ['Hipertensión', 'Arritmia', 'Infarto', 'Insuficiencia cardíaca'];

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
            selectedCondition,
        };
        try {
            const response = await axios.post('https://n8mtbgjq-3000.use2.devtunnels.ms/data', data);
            Alert.alert('Enviado', 'Configuraciones enviadas correctamente');
            console.log(response.data);
            navigation.replace('Login'); 
        } catch (error) {
            Alert.alert('Error', 'Hubo un error al registrar el usuario');
            console.error(error);
        }
    };

    const formatDate = (text) => {
        const cleaned = text.replace(/\D/g, '');
        let formatted = '';

        if (cleaned.length > 0) {
            formatted += cleaned.substring(0, 4); // Añadir el año
        }
        if (cleaned.length >= 5) {
            formatted += '-' + cleaned.substring(4, 6); // Añadir el mes
        }
        if (cleaned.length >= 7) {
            formatted += '-' + cleaned.substring(6, 8); // Añadir el día
        }

        setBirthDate(formatted);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <IconButton
                    icon="arrow-left"
                    onPress={() => navigation.replace('Login')} 
                    style={styles.backButton}
                    size={40}
                />
                <Text style={styles.title}>Registro</Text>
            </View>
            <TextInput
                label="Nombre"
                value={firstName}
                onChangeText={setFirstName}
                style={styles.input}
                mode="outlined"
            />
            <TextInput
                label="Apellido"
                value={lastName}
                onChangeText={setLastName}
                style={styles.input}
                mode="outlined"
            />
            <TextInput
                label="Edad"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
                style={styles.input}
                mode="outlined"
            />
            <TextInput
                label="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                mode="outlined"
            />
            <TextInput
                label="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                mode="outlined"
            />
            <TouchableRipple onPress={() => setModalVisible(true)} style={styles.dropdown}>
                <Text style={styles.dropdownText}>Sexo: {gender === 'masculino' ? 'Masculino' : 'Femenino'}</Text>
            </TouchableRipple>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Selecciona tu sexo:</Text>
                    <TouchableRipple onPress={() => { setGender('masculino'); setModalVisible(false); }}>
                        <Text style={styles .modalOption}>Masculino</Text>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { setGender('femenino'); setModalVisible(false); }}>
                        <Text style={styles.modalOption}>Femenino</Text>
                    </TouchableRipple>
                </View>
            </Modal>
            <TouchableRipple onPress={() => setConditionModalVisible(true)} style={styles.dropdown}>
                <Text style={styles.dropdownText}>Condición cardíaca: {hasHeartCondition ? selectedCondition : 'Ninguna'}</Text>
            </TouchableRipple>
            <Modal
                animationType="slide"
                transparent={true}
                visible={conditionModalVisible}
                onRequestClose={() => setConditionModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Selecciona tu condición cardíaca:</Text>
                    {heartConditions.map((condition) => (
                        <TouchableRipple key={condition} onPress={() => { setSelectedCondition(condition); setHasHeartCondition(true); setConditionModalVisible(false); }}>
                            <Text style={styles.modalOption}>{condition}</Text>
                        </TouchableRipple>
                    ))}
                    <TouchableRipple onPress={() => { setHasHeartCondition(false); setConditionModalVisible(false); }}>
                        <Text style={styles.modalOption}>Ninguna</Text>
                    </TouchableRipple>
                </View>
            </Modal>
            <Button mode="contained" onPress={handleRegister} style={styles.button}>
                Registrarse
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 30,
        marginBottom: 20,
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: -10,
        width: 40,
        height: 40, 
    },
    title: {
        paddingBottom: 30,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        marginBottom: 10,
    },
    dropdown: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    dropdownText: {
        fontSize: 16,
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
    modalOption: {
        padding: 10,
        fontSize: 16,
    },
    button: {
        marginTop: 20,
    },
});

export default Register;