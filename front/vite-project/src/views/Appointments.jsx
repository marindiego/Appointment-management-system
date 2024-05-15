import Appointment from "../components/Appointment/Appointment";
import appointmentsArr from "../helpers/appointments";
import { useState } from "react";

const Appointments = () => {
    const [appointments,] = useState(appointmentsArr);
    console.log(appointments);
    return (
        <main className="body">
            <section className="appointment-section">
                <div className="appointment-table">
                    <div className="appointment-table-header">
                       <span id="date">Date</span> 
                       <span id="time">Time</span>
                       <span id="status">Status</span>
                       <span id="description">Description</span>
                       <span></span>
                    </div>
                    <div className="appointment-table-body">
                        {
                            appointments.map(appointment => (
                                <Appointment
                                    key={appointment.id}
                                    date={appointment.date}
                                    time={appointment.time}
                                    description={appointment.description}
                                    status={appointment.status}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Appointments;