import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AppointmentContext } from '../context/AppointmentContext';

function BookingScreen({ navigation }) {
    const [problem, setProblem] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { addAppointment } = useContext(AppointmentContext);

    const handleBooking = () => {
        const newAppointment = {
            id: (Math.random() * 10000).toString(),
            type: 'Termin',
            issue: problem,
            patient: 'Neuer Patient',
            priority: 'Mittel',
            date: new Date().toLocaleString(),
        };
        addAppointment(newAppointment);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Termin erstellen</Text>
            <TextInput
                style={styles.input}
                placeholder="Was ist ihr Problem"
                value={problem}
                onChangeText={setProblem}
            />
            <TextInput
                style={styles.input}
                placeholder="Wie ist es passiert"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Email address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Nachricht"
                value={message}
                onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.button} onPress={handleBooking}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Zurück zum Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    backButton: {
        marginTop: 10,
        backgroundColor: '#555',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default BookingScreen;
