export const isValidCancelAppointment = (reservationDate) => {
    const today = new Date();
    const reservation = new Date(reservationDate);
  
    // Set the time of today's date to 00:00:00 to compare dates without considering the time
    today.setHours(0, 0, 0, 0);
  
    // Calculate the difference in time between the reservation date and today's date
    const timeDifference = reservation.getTime() - today.getTime();
  
    // Calculate the difference in days
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
  
    // Check if the reservation is at least 1 day away
    return dayDifference > 1;
}