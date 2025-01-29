import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Take = () => {
    const scale = useRef(new Animated.Value(1)).current;
        const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentTime(new Date().toLocaleTimeString());
            }, 1000);
    
            return () => clearInterval(interval);
        }, []);

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

            <Text style={styles.measureText}>Haz clic aquí para medir</Text>

            <TouchableOpacity style={styles.heartButton}>
                <Animated.View style={{ transform: [{ scale }] }}>
                    <Icon name="heart" style={styles.heartText} />
                </Animated.View>
            </TouchableOpacity>

            <View style={styles.timeContainer}>
                <Icon name="clock-o" style={styles.timeIcon} />
                <Text style={styles.time}>Son las: {currentTime}</Text>
            </View>

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
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    timeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    timeIcon: {
        fontSize: 24,
        color: '#007787',
    },
    time: {
        fontSize: 24,
        color: '#007787',
        fontWeight: 'bold',
    },
    heartButton: {
        borderRadius: 50,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
 
    },
    heartText: {
        fontSize: 250,
        color: '#ff758f',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    measureText: {
        fontSize: 24,
        color: '#007787',
        fontWeight: 'bold',
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
        color: '#007787',
        marginTop: 40,
    },
    recordItem: {
        backgroundColor: '#ccc',
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
        color: '#007787',
        marginRight: 5,
    },
    recordDate: {
        fontSize: 16,
        color: '#333',
    },
});

export default Take;