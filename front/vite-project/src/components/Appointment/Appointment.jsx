import { PropTypes } from 'prop-types'
import styles from "./Appointment.module.css"
const Appointment = ({ date, time, description, status}) => {
    return (
        <div className={styles["appointment-info"]}>
            <span className={styles["appointment-date"]}>{date.slice(0,10)}</span>
            <span className={styles["appointment-time"]}>{time}</span>
            <span className={styles[`appointment-description-${description.toLowerCase()}`]}>{description}</span>
            {/* <span className={styles["appointment-description"]}>{description}</span> */}
            {
                status === "ACTIVE" ? 
                <span className={styles["appointment-status-active"]}>{status.toLowerCase()}</span> 
                : 
                <span className={styles["appointment-status-canceled"]}>{status.toLowerCase()}</span>
            }
            <button disabled={status === "canceled"}>Cancel</button>
        </div>        
    )
}
Appointment.propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}
export default Appointment;