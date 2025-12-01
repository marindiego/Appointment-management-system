"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAppointmentScheduleDto = void 0;
/**
 * Middleware function to validate appointment scheduling data.
 * Checks if the provided data conforms to the AppointmentDto schema.
 * If the data is invalid, it sends an error response.
 * If the data is valid, it passes the request to the next middleware.
 */
// Function to check if all required fields are present
const checkRequiredFields = (data) => {
    const requiredFields = ['date', 'time', 'description', 'userId'];
    return requiredFields.filter(field => !(field in data));
};
// Function to check if the time value is valid (between 0 and 24 hours)
const isValidTime = (time) => {
    const timeRegex = /^(?:2[0-3]|[01]?[0-9]):(?:[0-5]?[0-9]|60)$/;
    return timeRegex.test(time);
};
// Function to check if data types are correct
const checkDataTypes = (data) => {
    return (new Date(data.date).toString() !== 'Invalid Date' &&
        typeof data.time === 'string' &&
        typeof data.description === 'string' &&
        typeof data.userId === 'number' &&
        isValidTime(data.time));
};
const checkAppointmentScheduleDto = (req, res, next) => {
    const appointmentData = req.body;
    // Check if all required fields are present
    const missingFields = checkRequiredFields(appointmentData);
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `The following fields are missing: ${missingFields.join(', ')}` });
    }
    // Check if data types are correct
    if (!checkDataTypes(appointmentData)) {
        return res.status(400).json({ error: 'Invalid data types provided or invalid time format (HH:MM)' });
    }
    // If all checks pass, proceed to the next middleware
    next();
};
exports.checkAppointmentScheduleDto = checkAppointmentScheduleDto;
