
export const validateTime = (time) => {
    const timeRegex = /^(0[8-9]|1[0-9]|20):[0-5][0-9]$/;
    return timeRegex.test(time);
}

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
    if (!validateTime(data.time)) {
        errors.time = 'Invalid time, must be in the opening hours';
    }

    return errors;
}