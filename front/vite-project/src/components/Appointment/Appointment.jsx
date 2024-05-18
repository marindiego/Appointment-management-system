import { PropTypes } from 'prop-types'
import styles from "./Appointment.module.css"

const Appointment = ({ date, time, description, status, handleOnClickCancel}) => {

   
    return (
        <div className={status === "ACTIVE" ? styles["appointment-info"] : styles["appointment-info-cancel"]}>
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
            <button type='button' onClick={handleOnClickCancel}>Cancel</button>
        </div>        
    )
}
Appointment.propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    handleOnClickCancel: PropTypes.func.isRequired
}
export default Appointment;