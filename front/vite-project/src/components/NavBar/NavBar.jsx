import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.svg";

const NavBar = () => {
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles["logo-container"]}>
                    <img className={styles["logo-image"]} src={logo} alt="logo" />
                </div>
                <div className={styles.links}>
                    <span>Home</span>
                    <span>Appointment</span>
                    <span>About Us</span>
                    <span>Contact</span>
                </div>
                <div className={styles["profile-container"]}>
                    <img className={styles["profile-image"]} src={profile} alt="profile" />
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;