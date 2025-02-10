import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Button } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Card } from 'react-native-paper';

const Statistics = () => {
    const [isHeartRate, setIsHeartRate] = useState(true); // true para pulsaciones, false para oxigenación

    const heartRateData = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
            {
                data: [70, 85, 90, 99, 128],
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, 
            },
        ],
    };

    const oxygenData = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
            {
                data: [95, 96, 97, 94, 93],
                color: (opacity = 1) => `rgba(0, 128, 255, ${opacity})`, 
            },
        ],
    };

    const screenWidth = Dimensions.get('window').width;

    // Datos de historial
    const heartRateHistory = [
        { date: '16/12/2024', time: '10:00 AM', values: '70, 85, 90, 99, 128 bpm' },
        { date: '15/12/2024', time: '09:30 AM', values: '72, 88, 91, 95, 130 bpm' },
    ];

    const oxygenHistory = [
        { date: '16/12/2024', time: '10:00 AM', values: '95, 96, 97, 94, 93 %' },
        { date: '15/12/2024', time: '09:30 AM', values: '96, 97, 98, 95, 92 %' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>
                {isHeartRate ? 'Frecuencia Cardíaca' : 'Oxigenación en Sangre'}
            </Text>

            <BarChart
                data={isHeartRate ? heartRateData : oxygenData}
                width={screenWidth - 40}
                height={220}
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    color: (opacity = 1) => isHeartRate ? `rgba(255, 0, 0, ${opacity})` : `rgba(0, 128, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    propsForLabels: {
                        fontSize: 12,
                    },
                }}
                style={styles.chart}
            />
            <View style={styles.switchContainer}>
                <Button
                title="Pulsaciones"
                onPress={() => setIsHeartRate(true)}
                color={isHeartRate ? '#45aeb5' : "#8d8d8f"}
                
            />
            <Button
                title="Oxigenación"
                onPress={() => setIsHeartRate(false)}
                color={!isHeartRate ? '#45aeb5' :  "#8d8d8f"}
                
            />
            </View>

            <View style={styles.historyContainer}>
                <Text style={styles.historyTitle}>Historial</Text>
                {isHeartRate ? (
                    heartRateHistory.map((record, index) => (
                        <Card key={index} style={styles.card}>
                            <Card.Content>
                                <Text style={styles.recordDate}>{record.date} - {record.time}</Text>
                                <Text style={styles.recordValue}>Pulsaciones: {record.values}</Text>
                            </Card.Content>
                        </Card>
                    ))
                ) : (
                    oxygenHistory.map((record, index) => (
                        <Card key={index} style={styles.card}>
                            <Card.Content>
                                <Text style={styles.recordDate}>{record.date} - {record.time}</Text>
                                <Text style={styles.recordValue}>Oxigenación: {record.values}</Text>
                            </Card.Content>
                        </Card>
                    ))
                )}
            </View >
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#007787"
    },
    chart: {
        borderRadius: 16,
        marginBottom: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        width: '100%',
        marginVertical: 20,
    },
    switchLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    historyContainer: {
        width: '100%',
        marginTop: 20,
    },
    historyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#007787"
    },
    card: {
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: '#ccc',
    },
    recordDate: {
        fontSize: 16,
        marginBottom: 5,
    },
    recordValue: {
        fontSize: 16,
        color: "#007787"
    },
    button:{
        backgroundColor: '#007787',
    },
    buttonOff:{
        backgroundColor: '#ccc',
        borderColor: '#007787',
        color: '#007787',
    },
});

export default Statistics;