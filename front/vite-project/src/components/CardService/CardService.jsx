import { PropTypes } from 'prop-types';
import styles from "./CardService.module.css";

const CardService = ({icon,title, description, className}) => {
    return (
        <article className={`${styles["card-service"]}`}>
            <div className={styles["card-service-container"]}>
                <div className={`${styles["card-service-header"]} ${styles[className]}`}>
                    <div className={styles["card-service-image-container"]}>
                        <img className={styles["card-service-image"]} src={icon} alt={title} />
                    </div>
                </div>
                <div className={styles["card-service-body"]}>
                    <h3 className={styles["card-service-title"]}>{title}</h3>
                    <p className={styles["card-service-description"]}>{description}</p>
                </div>
            </div>
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