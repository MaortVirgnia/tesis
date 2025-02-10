import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



function Home(props) {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.bienvenida}>
                <Icon name="user" style={styles.bienvenidaIcon} />
                <Text style={styles.tituloBienvenida}>Bienvenido</Text>
            </View>

            <Text style={styles.question}>¿Qué te gustaría hacer?</Text>
            
                <View style={styles.frecuencia}>
                    <View style={styles.frecuenciaInfo}>
                        <Text style={styles.title} >Frecuencia Cardiaca</Text>
                        <Text style={styles.info}>Mide tus pulsaciones ahora mismo</Text>
                        <Text style={styles.root}>Medir</Text>
                    </View>

                    <View style={styles.frecuenciaIcon}>
                        <Icon name="heart" style={styles.frecuenciaIcon}/>

                    </View>
                </View>      

            <View style={styles.recomendaciones}>
                <View style={styles.recomendacionesInfo}>
                    <Text style={styles.recomendationesTitle}>Recomendaciones</Text>
                </View>

                <View style={styles.frecuenciaIcon}>
                    <Icon name="hand-o-right" style={styles.frecuenciaIcon} />
                </View>
            </View>

            <View style={styles.grid}>
                <View style={styles.panel}>
                    <Icon name="bar-chart" style={styles.panelIcon} />
                    <Text style={styles.panelInfo}>Estadísticas</Text>
                </View>

                <View style={styles.panel}>
                    <Icon name="history" style={styles.panelIcon} />
                    <Text style={styles.panelInfo}>Historial</Text>
                </View>

                <View style={styles.panel}>
                    <Icon name="user" style={styles.panelIcon} />
                    <Text style={styles.panelInfo}>Perfil</Text>
                </View>

                <View style={styles.panel}>
                    <Icon name="gear" style={styles.panelIcon} />
                    <Text style={styles.panelInfo}>Configuración</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        alignItems: 'center',
        padding: 20,
    },
    bienvenida: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    tituloBienvenida: {
        fontSize: 24, // Tamaño estándar para el título de bienvenida
        fontWeight: 'bold',
        color: '#45aeb5',
    },
    bienvenidaIcon: {
        fontSize: 30, // Tamaño estándar para el ícono de bienvenida
        color: '#45aeb5',
        marginRight: 10,
    },
    question: {
        fontSize: 20, // Tamaño estándar para la pregunta
        color: '#45aeb5',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    frecuencia: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#45aeb5',
        marginBottom: 20,
    },
    frecuenciaInfo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 18, // Tamaño estándar para el título de frecuencia
        color: 'white',
        fontWeight: 'bold',
    },
    frecuenciaIcon: {
        fontSize: 40, // Tamaño estándar para el ícono de frecuencia
        color: 'white',
    },
    info: {
        fontSize: 14, // Tamaño estándar para la información
        fontWeight: 'bold',
        color: 'white',
    },
    root: {
        color: 'white',
        fontSize: 18, // Tamaño estándar para el botón de medir
        fontWeight: 'bold',
    },
    grid: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    panel: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%', // Ajusta el ancho para que quepan dos en una fila
        borderRadius: 10,
        height: 150, // Altura estándar para los paneles
        backgroundColor: '#fff',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    panelIcon: {
        fontSize: 30, // Tamaño estándar para los íconos de los paneles
        color: '#45aeb5',
    },
    panelInfo: {
        fontSize: 18, // Tamaño estándar para la información de los paneles
        color: '#45aeb5',
        fontWeight: 'bold',
    },
    recomendaciones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#45aeb5',
        marginBottom: 20,
    },
    recomendacionesInfo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    recomendationesTitle: {
        fontSize: 18, 
        fontWeight: 'bold',
    },
});

export default Home;

