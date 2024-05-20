import { createSlice } from "@reduxjs/toolkit";
import { cancelAppointment as cancel } from "../services/apiService";

const initialState = {
    userId: 0,
    appointments: [],
    isLoggedIn: false,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        isLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        updateAppointments: (state, action) => {
            state.appointments = action.payload
        },
        addAppointments: (state, action) => {
            state.appointments.push(action.payload)
        },
        cancelAppointment: (state, action) => {
            cancel(action.payload)
        },
        userLogout: (state) => {
            state.userId = 0
            state.appointments = []   
        }
    }
})
export default appSlice.reducer;
export const { isLoggedIn, setUserId, addAppointments,updateAppointments, cancelAppointment, userLogout } = appSlice.actions;
