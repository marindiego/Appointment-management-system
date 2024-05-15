import styles from "./Hero.module.css"
import heroImage from "../../assets/hero-image.jpeg"

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles["hero-content-container"]}>
                <div className={styles["hero-content"]}>
                        <h1 className={styles["hero-title"]}>Expert Medical Services for a Healthier Future</h1>
                        <p className={styles["hero-description"]}>At our health center, we believe that a healthier future starts with expert medical services provided with compassion and dedication</p>
                        <button className={styles["hero-button"]} type="button">Book an Appointment</button>
                </div>
                <div className={styles["hero-image-container"]}>
                        <img className={styles["hero-image"]} src={heroImage} alt="hero image" />
                </div>
            </div>
        </section>
    )
}
export default Hero;