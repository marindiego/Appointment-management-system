import { PropTypes } from 'prop-types';
import styles from "./CardService.module.css";

const CardService = ({icon,title, description, className}) => {
    return (
        <article className={`${styles["card-service"]} ${styles[className]}`}>
            <div className={styles["card-service-image-container"]}>
                <img className={styles["card-service-image"]} src={icon} alt={title} />
            </div>
            <h3 className={styles["card-service-title"]}>{title}</h3>
            <p className={styles["card-service-description"]}>{description}</p>
        </article>
    )
}
CardService.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string
}
export default CardService;