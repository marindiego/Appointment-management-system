export const validateLogin = (data) => {
    const errors = {};
    const userNameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=]+$/;

    if (!userNameRegex.test(data.userName)) {
        errors.userName = 'Invalid username';
    }
    if (!passwordRegex.test(data.password)) {
        errors.password = 'Invalid password';
    }
    return errors;
}