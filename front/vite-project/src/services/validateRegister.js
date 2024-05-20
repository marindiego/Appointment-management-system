export const validateRegister = (userData) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const userNameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const dniRegex = /^\d{8}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!nameRegex.test(userData.name)) {
        errors.name = "Invalid name";
    }
    if (!emailRegex.test(userData.email)) {
        errors.email = "Invalid email";
    }
    if (!dniRegex.test(userData.nDni)) {
        errors.nDni = "Invalid DNI";
    }
    if (!birthDateRegex.test(userData.birthDate)) {
        errors.birthDate = "Invalid birth date";
    }
    if (!passwordRegex.test(userData.password)) {
        errors.password = "The password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character";
    }
    if (!userNameRegex.test(userData.username)) {
        errors.username = "Username must contain only letters";
    }
    if (userData.password !== userData.confirmPassword) {
        errors.confirmPassword = "The password do not match";
    }
    return errors;
}