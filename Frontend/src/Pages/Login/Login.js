import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { FaArrowRightLong, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import styles from "./login.module.css"
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage.js";
import Logo from "../../Assets/img-01.png"

export default function Login() {

    const [passwordShown, setPasswordShown] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const PasswordVisibility = () => {
        setPasswordShown(passwordShown => !passwordShown);
    };

    const handleLogin = async (e) => {
        e.preventDefault(); 

        setError('');
    
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha: password }),
            });
            if (response.ok) {
                window.location.href = '/trelo';
            } else {
                const responseData = await response.text();
                setError(responseData);
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return(
        <div className={styles.loginContainer}>
            <div className={styles.loginWrap}>
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className={styles.rightContainer}>
                    <h1 className={styles.header}> Login </h1>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <h3 className={styles.inputTitle}> Email </h3>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.inputContainer}>
                            <h3 className={styles.inputTitle}> Senha </h3>
                            <div className={styles.passwordContainer}>
                            <input type={passwordShown ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                                <i className={styles.eyeIcon} onClick={PasswordVisibility}>
                                {passwordShown ? <FaRegEyeSlash /> : <FaRegEye />}
                                </i>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button onClick={handleLogin}> LOGIN </button>
                        </div>
                        {error && ( 
                            <ErrorMessage message="Username ou senha inválida" />
                        )}
                    </div>
                    <div className={styles.cadastroContainer}>
                        <a className={styles.cadastroLink} href="/cadastro" style={{color: '#333333'}}> cadastre-se </a> 
                        <FaArrowRightLong size={12}/>
                    </div>
                </div>
            </div>
        </div>
    );
}



