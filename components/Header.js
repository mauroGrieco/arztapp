import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Arzt App</Text>
            <View style={styles.navLinks}>
                <Text style={styles.navLink}>Sign Up</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    navLinks: {
        flexDirection: 'row',
    },
    navLink: {
        color: '#fff',
        marginLeft: 15,
        fontSize: 16,
    },
});

export default Header;
