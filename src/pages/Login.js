import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
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
            <Button mode="outlined" onPress={handleRegister} style={styles.button}>
                Registrarse
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        marginBottom: 24,
        textAlign: 'center',
        color: '#333',
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 12,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
        marginBottom: 12,
    },
    eyeIcon: {
        marginLeft: -40, // Ajusta este valor según sea necesario
    },
    button: {
        marginBottom: 12,
    },
});

export default Login;