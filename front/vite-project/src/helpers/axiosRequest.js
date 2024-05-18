import axios from "axios";

export const getAppointments = async() => {
    const response = await axios.get("http://localhost:3002/appointments");
    if (response.status !== 200) {
        throw new Error("Failed to fetch appointments");
    }
    return response;
}
export const getAppointmentsByUserId = async(id) => {
    const response = await axios.get(`http://localhost:3002/appointments/users/${id}`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch appointments");
    }
    return response;
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