import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 Arzt App - Die beste Termin App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        height: 40,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default Footer;
