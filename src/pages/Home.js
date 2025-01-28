import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



function Home (props) {

    return (
        <View style={styles.container}>
            <View style={styles.frecuencia}>
                <View style={styles.frecuenciaInfo}>
                    <Text style={styles.title} >Frecuencia Cardiaca</Text>
                    <Text style={styles.info}>Mide tus pulsaciones ahora mismo</Text>
                    <Text style={styles.root} >Medir</Text>
                </View>

                <View style={styles.frecuenciaIcon}>
                    <Icon name="heart" style={styles.frecuenciaIcon} />
                </View>
            </View>

            <View style={styles.recomendaciones}>
                <View style={styles.recomendacionesInfo}>
                    <Text style={styles.recomendationesTitle} >Recomendaciones</Text>
                </View>

                <View style={styles.frecuenciaIcon}>
                    <Icon name="hand-o-right" style={styles.frecuenciaIcon} />
                </View>
            </View>

            <View style={styles.grid}>
                <View style={styles.panel}>
                    <Icon name="bar-chart" style={styles.panelIcon} />
                    <Text style={styles.panelInfo} >Estadisticas</Text>
                </View>

                <View style={styles.panel}>
                    <Icon name="history" style={styles.panelIcon} />
                    <Text style={styles.panelInfo} >Historial</Text>
                </View>

                <View style={styles.panel}>
                    <Icon name="user" style={styles.panelIcon} />
                    <Text style={styles.panelInfo} >Perfil</Text>
                </View>

                <View style={styles.panel}>
                    <Icon name="gear" style={styles.panelIcon} />
                    <Text style={styles.panelInfo} >Configuracion</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    titulo: {
        fontSize: 30,
        marginBottom: 20,
    },
    frecuencia: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        gap: 50,
        marginTop: 20,
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#45aeb5',
    },
    frecuenciaInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginBottom: 20,
    },
    title:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    frecuenciaIcon: {
        fontSize: 100,
        color: 'white',
        
    },
    info:{
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    root:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    grid: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px',
    },
    panel:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        borderRadius: 10,
        height: 150,
        boxShadow: '0 0 0 2px #45aeb5'
    },
    panelIcon:{
        fontSize: 50,
        color: '#45aeb5',
    },
    panelInfo: {
        fontSize: 20,
        color: '#45aeb5',
        fontWeight: 'bold',
    },
    recomendaciones: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        gap: 20,
        marginTop: 20,
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#45aeb5',
    },
    recomendacionesInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginBottom: 20,
    },
    recomendationesTitle:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    recomendacionesIcon: {
        fontSize: 100,
        color: 'white',
        
    },
});

export default Home;