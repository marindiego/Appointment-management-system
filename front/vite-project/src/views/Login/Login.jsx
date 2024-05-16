import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { validateLogin } from "../../helpers/validateLogin";
import axios from "axios";

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const validationsErrors = validateLogin(user);
        setErrors(validationsErrors);
        if (Object.keys(validationsErrors).length) {
            return;
        }
        axios.post("http://localhost:3002/users/login",user)
        .then((response) => {
            if (response.status === 200) {
                alert("Login correcto");
            }
        })
        .catch((error) => {
            console.log(error);
            alert("Login incorrecto", error.response.data.message);
        });
    }
    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    useEffect(() => {
    }, [errors]);   
    return (
        <section className={styles["login-section"]}>
            <form onSubmit={handleOnSubmit} className={styles["login-form"]}>
                <input 
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={user.username}
                    onChange={handleOnChange} 
                />
                {errors.username && <p className={styles["error"]}>{errors.username}</p>}
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleOnChange}
                />
                {errors.password && <p className={styles["error"]}>{errors.password}</p>}
                <button type="submit" disabled={!user.username || !user.password}>Login</button>
            </form>
        </section>
    )
}
export default Login;