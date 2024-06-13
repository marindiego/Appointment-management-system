import { useSelector } from "react-redux";
import { cancelAppointment, updateAppointments } from "../redux/slices";
import { getAppointmentsByUserId } from "../services/apiService";
import { isValidCancelAppointment } from "../services/isValidCancelAppointment.js";
import { useDispatch } from "react-redux";
import  Appointment  from "../components/Appointment/Appointment.jsx";


const LazyAppointmentsLoader = () => {
    const appointments = useSelector(state => state.appointments);
    const userId = useSelector(state => state.userId);
    const dispatch = useDispatch();

    const handleOnClickCancel = (id, date) => {
        if (!isValidCancelAppointment(date)) {
            alert("Appointments can only be cancelled more than 1 day in advance.");
            return;
        }

        dispatch(cancelAppointment(id)); // I'm using dispatch to call the action
        
        getAppointmentsByUserId(userId)
            .then(res => {
                dispatch(updateAppointments(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            {
                appointments.map(appointment => (
                    <Appointment
                        key={appointment.id}
                        id={appointment.id}
                        date={appointment.date}
                        time={appointment.time}
                        description={appointment.description}
                        status={appointment.status}
                        handleOnClickCancel={() => handleOnClickCancel(appointment.id, appointment.date)}
                    />
                ))
            }
        </div>
    )
};

export default LazyAppointmentsLoader;