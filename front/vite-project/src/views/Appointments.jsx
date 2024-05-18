import { useEffect } from 'react';
import Appointment from "../components/Appointment/Appointment";
//import appointmentsArr from "../helpers/appointments";
import { useState } from "react";
import { useSelector } from 'react-redux';
import "../styles/index.css"
import { getAppointmentsByUserId } from '../helpers/axiosRequest';
import { useDispatch } from 'react-redux';
import { updateAppointments } from '../redux/slices';
import { cancelAppointment } from '../redux/slices';
import { Link } from 'react-router-dom';

const NoAppointments = () => {
    return (
        <div style={{textAlign: "center", marginTop: "100px", marginBottom: "100px", fontSize: "24px", fontWeight: "bold"}}>
            <h1>You do not have any appointments yet, please book one</h1>
        </div>
    )
}

const Appointments = () => {
    //const [appointments,setAppointments] = useState([]);
    const [hasAppointment,setHasAppointment] = useState(false);
    const userId = useSelector(state => state.userId);
    const appointments = useSelector(state => state.appointments);
    const dispatch = useDispatch();
    
    useEffect(() => {
        getAppointmentsByUserId(userId)
            .then(res => {
                if (res.status === 200) {
                    setHasAppointment(true);
                    dispatch(updateAppointments(res.data));
                }
            })
            .catch(err => {
                console.log(err);
            })
    },[userId,dispatch])

    const handleOnClickCancel = (id) => {
        dispatch(cancelAppointment(id));
        getAppointmentsByUserId(userId)
            .then(res => {
                dispatch(updateAppointments(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <main className="body">
            <section className="appointment-section">
                <div className="appointment-table">
                    {
                        hasAppointment?
                        <div className="appointment-table-header">
                            <span id="date">Date</span> 
                            <span id="time">Time</span>
                            <span id="description">Type</span>
                            <span id="Status">Status</span>
                            <span></span>
                        </div>
                        :
                        null
                    }
                    {!hasAppointment? 
                        <NoAppointments/>    
                    :
                    <div className="appointment-table-body">
                        {
                            appointments.map(appointment => (
                                <Appointment
                                    key={appointment.id}
                                    id={appointment.id}
                                    date={appointment.date}
                                    time={appointment.time}
                                    description={appointment.description}
                                    status={appointment.status}
                                    handleOnClickCancel={() => handleOnClickCancel(appointment.id)}
                                />
                            ))
                        }
                    </div>
                    }
                </div>
                <Link to="/appointments/schedule">
                    <button className="appointment-schedule-button"><span className='plus-icon'>+</span>Schedule an Appointment</button>
                </Link>
            </section>
        </main>
    )
}
export default Appointments;