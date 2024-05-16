import axios from "axios";

export const getAppointments = async() => {
    const response = await axios.get("http://localhost:3002/appointments");
    if (response.status !== 200) {
        throw new Error("Failed to fetch appointments");
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