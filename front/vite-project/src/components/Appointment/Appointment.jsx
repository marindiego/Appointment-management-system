import { PropTypes } from 'prop-types'
import styles from "./Appointment.module.css"
const Appointment = ({ date, time, description, status}) => {
    return (
        <div className={styles["appointment-info"]}>
            <span className={styles["appointment-date"]}>{date}</span>
            <span className={styles["appointment-time"]}>{time}</span>
            <span className={styles["appointment-description"]}>{description}</span>
            <span className={styles["appointment-status"]}>{status}</span>
            <span>cancel</span>
        </div>        
    )
}
Appointment.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}
export default Appointment;