import React, { createContext, useState } from 'react';

const AppointmentContext = createContext();

const AppointmentProvider = ({ children }) => {
    const [appointments, setAppointments] = useState([
        { id: '1', type: 'Termin', issue: 'Beinbruch', patient: 'Max Mustermann', priority: 'Hoch', date: 'Dez 1, 14:00' },
        { id: '2', type: 'Gespräch', issue: 'Psychologische Probleme', patient: 'Anna Müller', priority: 'Mittel', date: 'Dez 1, 15:00' },
    ]);

    const addAppointment = (appointment) => {
        setAppointments([...appointments, appointment]);
    };

    return (
        <AppointmentContext.Provider value={{ appointments, addAppointment }}>
            {children}
        </AppointmentContext.Provider>
    );
};

export { AppointmentContext, AppointmentProvider };
