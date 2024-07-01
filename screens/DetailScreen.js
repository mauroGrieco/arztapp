import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DetailScreen({ route, navigation }) {
    const { appointmentId } = route.params;
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        const loadAppointment = async () => {
            const storedAppointment = await AsyncStorage.getItem(appointmentId);
            setAppointment(JSON.parse(storedAppointment));
        };

        loadAppointment();
    }, [appointmentId]);

    if (!appointment) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Lade Daten...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Termin Details</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.detailText}>Art: {appointment.type}</Text>
                <Text style={styles.detailText}>Inhalt: {appointment.issue}</Text>
                <Text style={styles.detailText}>Patient: {appointment.patient}</Text>
                <Text style={styles.detailText}>Priorität: {appointment.priority}</Text>
                <Text style={styles.detailText}>Datum/Zeit: {appointment.date}</Text>
                {alert(appointment.image)}
                {appointment.image && (
                    <Image source={{ uri: appointment.image }} style={styles.image} />
                )}
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Zurück</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    detailContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 20,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DetailScreen;
