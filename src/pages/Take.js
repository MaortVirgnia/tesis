import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Take = () => {
    const scale = useRef(new Animated.Value(1)).current;


    const startPulsating = () => {
        scale.setValue(1);
        Animated.loop(
            Animated.sequence([
                Animated.timing(scale, {
                    toValue: 1.1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(scale, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    useEffect(() => {
        startPulsating();
    }, []);

    return (
        <View style={styles.container}>          
            <TouchableOpacity style={styles.heartButton}>
                <Animated.View style={{ transform: [{ scale }] }}>
                    <Text style={styles.heartText}>❤️</Text>
                </Animated.View>
            </TouchableOpacity>

            <Text style={styles.measureText}>Haz clic aquí para medir</Text>

            <View style={styles.recordContainer}>
                <Text style={styles.recordTitle}>Últimos Registros</Text>
                <View style={styles.recordItem}>
                    <Text style={styles.recordLabel}>Frecuencia Cardíaca:</Text>
                    <View style={styles.recordValueContainer}>
                        <Text style={styles.recordValue}>90 bpm</Text>
                        <Text style={styles.recordDate}>(27/10/2024)</Text>
                    </View>
                </View>
                <View style={styles.recordItem}>
                    <Text style={styles.recordLabel}>Oxigenación en Sangre: </Text>
                    <View style={styles.recordValueContainer}>
                        <Text style={styles.recordValue}> 98%</Text>
                        <Text style={styles.recordDate}>(27/10/2024)</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    heartButton: {
        backgroundColor: '#ffcccc',
        borderRadius: 50,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, 
    },
    heartText: {
        fontSize: 120,
        color: '#ff0000',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    measureText: {
        fontSize: 18,
        color: '#007BFF',
        marginBottom: 40,
    },
    recordContainer: {
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 20,
    },
    recordTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    recordItem: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    recordLabel: {
        fontSize: 18,
        color: '#333',
    },
    recordValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    recordValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007BFF',
        marginRight: 5,
    },
    recordDate: {
        fontSize: 16,
        color: '#888',
    },
});

export default Take;