import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { validateRegister } from "../../helpers/validateRegister";
import axios from "axios"

const Register = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        nDni: "",
        birthDate: "",
        username: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        nDni: "",
        birthDate: "",
        username: "",
        password: "",
        confirmPassword: ""
    });
    console.log(userData);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationsErrors = validateRegister(userData);
        setErrors(validationsErrors);

        if (Object.keys(validationsErrors).length) {
            return;
        }
        const {name, email, nDni, birthDate, username, password} = userData;

        axios.post("http://localhost:3002/users/register", {
            name: name,
            email: email,
            birthDate: birthDate,
            nDni: Number(nDni),
            username: username,
            password: password
        })
        .then((response) => {
            if (response.status === 201) {
                alert("Usuario registrado correctamente");
            }
        })
        .catch((error) => {
            alert("Duplicate DNI or email", error.response.message);
        });
    }
    useEffect(() => {
        console.log("Errors", errors); // Mostrar errores actualizados
      }, [errors]);   
    return (
        <section className={styles["register-section"]}>
            <form onSubmit={handleSubmit} className={styles["register-form"]}>
                <div className={styles["form-group"]}>
                    <label>Full Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={userData.name}
                        placeholder="Pepito Perez"
                        onChange={handleInputChange}
                    />
                    {errors.name && <p className={styles["error"]}>{errors.name}</p>}
                </div>
                <div className={styles["form-group"]}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        placeholder="email@example.com"
                        onChange={handleInputChange}
                    />
                    {errors.email && <p className={styles["error"]}>{errors.email}</p>}
                </div>
                <div className={styles["form-group"]}>            
                    <label>DNI</label>
                    <input
                        type="number"
                        name="nDni"
                        value={userData.nDni}
                        placeholder="96020092"
                        onChange={handleInputChange}
                    />
                    {errors.nDni && <p className={styles["error"]}>{errors.nDni}</p>}
                </div>
                <div className={styles["form-group"]}>    
                    <label>Birth Date</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={userData.birthDate}
                        onChange={handleInputChange}
                    />
                    {errors.birthDate && <p className={styles["error"]}>{errors.birthDate}</p>}
                </div>
                <div className={styles["form-group"]}>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        placeholder="Username"
                        onChange={handleInputChange}
                    />
                    {errors.username && <p className={styles["error"]}>{errors.username}</p>}
                </div>
                <div className={styles["form-group"]}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        placeholder="********"
                        onChange={handleInputChange}
                    />
                    {errors.password && <p className={styles["error"]}>{errors.password}</p>}
                </div>
                <div className={styles["form-group"]}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={userData.confirmPassword}
                        placeholder="********"
                        onChange={handleInputChange}
                    />
                    {errors.confirmPassword && <p className={styles["error"]}>{errors.confirmPassword}</p>}
                </div>
                <button type="submit" className={styles["register-button"]} 
                disabled={
                    !userData.name || !userData.email || !userData.nDni || !userData.birthDate || !userData.username || !userData.password || !userData.confirmPassword}>Register</button>
            </form>
        </section>
    )
}
export default Register; 