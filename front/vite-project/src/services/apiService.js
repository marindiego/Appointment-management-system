import axios from "axios";

const API_URL = "http://localhost:3002";

// Create an instance of axios with the base URL
const apiService = axios.create({
    baseURL: API_URL,
});

export const getAppointments = async() => {
    try {
        const response = await apiService.get("/appointments");
        return response;
    } catch (error) {
        throw new Error("Failed to fetch appointments", error.message);
    }
    

}
export const getAppointmentsByUserId = async(id) => {
    try {
        return await apiService.get(`/appointments/users/${id}`);
    } catch (error) {
        throw new Error("Failed to fetch appointments", error.message);
    }
    // const response = await axios.get(`http://localhost:3002/appointments/users/${id}`);
    // if (response.status !== 200) {
    //     throw new Error("Failed to fetch appointments");
    // }
    // return response;
}
export const cancelAppointment = async(appointmentId) => {
    const response = await axios.put(`http://localhost:3002/appointments/cancel/${appointmentId}`);
    if (response.status !== 200) {
        throw new Error("Failed to cancel appointment");
    }
    return response;
}
export const postRegisterForm = async(formData) => {
    const { name, email, nDni, birthDate, username, password } = formData;
    const response = await axios.post("http://localhost:3002/users/register", {
        name,
        email,
        birthDate,
        nDni: Number(nDni),
        username,
        password
    });
    if (response.status !== 200) {
        throw new Error("Failed to register user");
    }
    console.log(response);
    return response;
}
export const postAppointmentForm = async(formData, userId) => {
    const { date, time, description } = formData;
    const response = await axios.post(`http://localhost:3002/appointments/schedule`, {
        date,
        time,
        description,
        userId
    });
    if (response.status !== 201) {
        throw new Error();
    }
    return response;
}
export const getUserById = async(id) => {
    const response = await axios.get(`http://localhost:3002/users/${id}`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch user");
    }
    return response;
}