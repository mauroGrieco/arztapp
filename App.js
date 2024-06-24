import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import ReminderScreen from './screens/ReminderScreen';
import OverviewScreen from './screens/OverviewScreen';
import DetailScreen from './screens/DetailScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppointmentProvider } from './context/AppointmentContext';

const Stack = createStackNavigator();

function App() {
    return (
        <AppointmentProvider>
            <NavigationContainer>
                <SafeAreaView style={styles.container}>
                    <Header />
                    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Booking" component={BookingScreen} />
                        <Stack.Screen name="Reminders" component={ReminderScreen} />
                        <Stack.Screen name="Overview" component={OverviewScreen} />
                        <Stack.Screen name="Detail" component={DetailScreen} />
                    </Stack.Navigator>
                    <Footer />
                </SafeAreaView>
            </NavigationContainer>
        </AppointmentProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
