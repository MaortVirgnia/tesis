import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    const handleLogin = () => {        
        navigation.replace('BottomTab');
    };     
    
    const handleRegister = () => {
        navigation.replace('Register');
    };
    
    return (
        <ImageBackground style={styles.background} imageStyle={styles.image} source={require('../img/fondo.jpg') }>
            <View style={styles.container}>
                <Text style={styles.title}>Hola</Text>
                <Text style={styles.subtitle}>Ingresa a tu cuenta</Text>

                <TextInput
                    label="Usuario"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    mode="outlined"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        label="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        style={styles.passwordInput}
                        mode="outlined"
                    />
                    <IconButton
                        icon={showPassword ? "eye-off" : "eye"}
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeIcon}
                    />
                </View>
                <Button mode="contained" onPress={handleLogin} style={styles.button}>
                    Iniciar Sesión
                </Button>
                <Button mode="outlined" onPress={handleRegister} style={styles.button1}  textColor='#007787'>
                    Registrarse
                </Button>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    image:{
        opacity: 0.7,
        width: '100%',
        height: '100%',
        
    },
    container: {
        marginHorizontal: '5%',
        padding: 20,
        backgroundColor: 'rgb(255, 255, 255)', 
        borderRadius: 30,
        alignContent: 'center',
    },
    title: {
        fontSize: 28,
        marginBottom: 24,
        textAlign: 'left',
        color: '#333',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 12,
        textAlign: 'left',
        color: '#333',
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 12,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    passwordInput: {
        flex: 1,
        marginBottom: 12,
    },
    eyeIcon: {
        marginLeft: -46, 
    },
    button: {
        marginBottom: 12,   
        backgroundColor: '#007787',
    },
    button1: {
        marginBottom: 12,
        borderColor: '#007787',
    },
});

export default Login;