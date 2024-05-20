export const validateLogin = (data) => {
    const errors = {};
    const userNameRegex = /^[a-zA-Z0-9]+$/;

    if (!userNameRegex.test(data.username)) {
        errors.username = 'Invalid username';
    }
    return errors;
}