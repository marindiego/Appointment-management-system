import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { validateLogin } from "../../helpers/validateLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserId, isLoggedIn } from "../../redux/slices";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userId = useSelector(state => state.userId)

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
                    dispatch(setUserId(response.data.userLogged.id));  // seteo el id del usuario
                    dispatch(isLoggedIn(true));
                    navigate("/appointments"); 
                }
            })
            .catch((error) => {
                console.log(error.response);
                alert("Occurred an error");
            });
    }
    useEffect(() => {
        console.log("User ID:", userId);
    }, [userId]);

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

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