import { useEffect } from 'react';
import { useState } from "react";
import { useSelector } from 'react-redux';
import "../styles/index.css"
import { getAppointmentsByUserId } from '../services/apiService';
import { useDispatch } from 'react-redux';
import { updateAppointments } from '../redux/slices';
import { Link } from 'react-router-dom';
import React, { Suspense } from 'react';

//? What am I doing here?
//* I'm using lazy loading to load the component only when it's needed
const LazyAppointmentsLoader = React.lazy(() => import('../hooks/LazyAppointmentsLoader.jsx'));


const NoAppointments = () => {
    return (
        <div style={{textAlign: "center", marginTop: "100px", marginBottom: "100px", fontSize: "24px", fontWeight: "bold"}}>
            <h1>You do not have any appointments yet, please book one</h1>
        </div>
    )
}

const Appointments = () => {
    const [hasAppointment,setHasAppointment] = useState(false);
    const userId = useSelector(state => state.userId);
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
                        <Suspense fallback={<div style={{textAlign: "center", marginTop: "100px", marginBottom: "100px", fontSize: "24px", fontWeight: "bold"}}>Loading...</div>}>
                            <LazyAppointmentsLoader />
                        </Suspense>
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