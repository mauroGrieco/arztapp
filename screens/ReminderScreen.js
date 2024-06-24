import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ReminderScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Erinnerungen</Text>
            {/* Hier würden die Erinnerungen angezeigt werden */}
            <Text>Keine Erinnerungen vorhanden</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default ReminderScreen;
