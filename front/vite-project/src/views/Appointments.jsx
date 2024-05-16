import { useEffect } from 'react';
import Appointment from "../components/Appointment/Appointment";
//import appointmentsArr from "../helpers/appointments";
import { useState } from "react";
import "../styles/index.css"
import { getAppointments } from '../helpers/axiosRequest';

const Appointments = () => {
    const [appointments,setAppointments] = useState([]);

    useEffect(() => {
        getAppointments()
            .then(res => {
                setAppointments(res.data);
            })
            .catch(err => {
                alert(err.message)
            })
    },[])
    return (
        <main className="body">
            <section className="appointment-section">
                <div className="appointment-table">
                    <div className="appointment-table-header">
                       <span id="date">Date</span> 
                       <span id="time">Time</span>
                       <span id="description">Description</span>
                       <span id="Status">Status</span>
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