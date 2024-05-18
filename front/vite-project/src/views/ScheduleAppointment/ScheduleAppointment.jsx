import { useState } from 'react';
import styles from './ScheduleAppointment.module.css';
import { validateAppointment } from '../../helpers/validateAppointment';
import { postAppointmentForm } from '../../helpers/axiosRequest';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAppointments } from '../../redux/slices';
const ScheduleAppointment = () => {
    const userId = useSelector(state => state.userId);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const appointmentsGlobalState = useSelector(state => state.appointments);
    const [appointment, setAppointment] = useState({
        date: "",
        time: "",
        description: ""
    })
    const [errors, setErrors] = useState({
        date: "",
        time: "",
        description: ""
    })
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAppointment((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationsErrors = validateAppointment(appointment);
        setErrors(validationsErrors);

        if (Object.keys(validationsErrors).length) {
            return;
        }
        try {
            const response = await postAppointmentForm(appointment, userId);
            console.log(response);
            if (response.status === 201) {
                alert("Appointment scheduled successfully");
                setAppointment({
                    date: "",
                    time: "",
                    description: ""
                })
                setErrors({
                    date: "",
                    time: "",
                    description: ""
                })
                dispatch(addAppointments([...appointmentsGlobalState, response.data]));
                navigate("/appointments");
            }
            else {
                alert("Error scheduling appointment");
            }
        } catch (error) {
            console.log("Error",error);
            alert("Error scheduling appointment");
        }
    }
    return (
        <section className={styles["schedule-appointment-section"]}>
            <form onSubmit={handleSubmit} className={styles["schedule-appointment-form"]}>
                <label>Date</label>
                <input 
                    type="date"
                    name="date"
                    value={appointment.date}
                    onChange={handleOnChange}
                />
                {errors.date && <p className={styles["error-message"]}>{errors.date}</p>}
                <label>Time</label>
                <input 
                    type="time"
                    name="time"
                    value={appointment.time}
                    onChange={handleOnChange}
                />
                {errors.time && <p className={styles["error-message"]}>{errors.time}</p>}
                <label>Type</label>
                <select 
                    name="description"
                    value={appointment.description}
                    onChange={handleOnChange}
                >
                    <option value="Cardiologist">Cardiology</option>
                    <option value="Orthodontics">Orthodontics</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Dermatology">Dermatology</option>
                </select>
                {errors.description && <p className={styles["error-message"]}>{errors.description}</p>}
                <button type="submit" className={styles["schedule-button"]}>Schedule Appointment</button>
            </form>
        </section>
    );
};
export default ScheduleAppointment;