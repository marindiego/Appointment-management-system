import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles["logo-container"]}>
                    <img className={styles["logo-image"]} src={logo} alt="logo" />
                </div>
                <div className={styles.links}>
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                    {isLoggedIn ? 
                    <Link to="/appointments">
                        <span>Appointments</span>
                    </Link> : null}
                    {/* <Link to="/about-us">
                        <span>About Us</span>
                    </Link>
                    <Link to="/contact">
                        <span>Contact</span>
                    </Link> */}
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                    <Link to="/register">
                        <span>Register</span>
                    </Link>
                </div>
                <div className={styles["profile-container"]}>
                    <img className={styles["profile-image"]} src={profile} alt="profile" />
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;