export const validateAppointment = (data) => {
    const errors = {};
    if (!data.description) {
        errors.description = 'Description is required';
    }
    if (!data.date) {
        errors.date = 'Date is required';
    }
    if (!data.time) {
        errors.time = 'Time is required';
    }
    return errors;
}