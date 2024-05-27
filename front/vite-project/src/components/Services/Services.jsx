
import CardService from "../CardService/CardService";
import styles from "./Service.module.css";
import servicesArr from "../../services/services";
import { useState } from "react";


const Services = () => {
    const [services,] = useState(servicesArr);
    return (
        <section className={styles["services-section"]}>
            <h2 className={styles["services-section-title"]}>Our best <span className={styles["highlight-service"]}>services</span></h2>
            <div className={styles["services-section-break"]}></div>
            <div className={styles["services-container"]}>
                {
                    services.length > 0 &&
                    services.map(service => (
                        <CardService 
                            key={service.id} 
                            icon={service.icon} 
                            title={service.title} 
                            description={service.description} 
                            className={service.className}
                        />
                    ))
                    
                }
            </div>
        </section>
    );
}

export default Services;