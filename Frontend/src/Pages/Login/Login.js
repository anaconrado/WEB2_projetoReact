import React, {useState} from "react";
import { FaArrowRightLong, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import styles from "./login.module.css"
import Logo from "../../Assets/img-01.png"

export default function Login() {

    const [passwordShown, setPasswordShown] = useState(false);

    const PasswordVisibility = () => {
        setPasswordShown(passwordShown => !passwordShown);
    };

    return(
        <div className={styles.loginContainer}>
            <div className={styles.loginWrap}>
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className={styles.rightContainer}>
                    <h1> Login </h1>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <h3 className={styles.inputTitle}> Email </h3>
                            <input type="email"/>
                        </div>
                        <div className={styles.inputContainer}>
                            <h3 className={styles.inputTitle}> Senha </h3>
                            <div className={styles.passwordContainer}>
                                <input type={passwordShown ? "text" : "password"}/>
                                <i className={styles.eyeIcon} onClick={PasswordVisibility}>
                                {passwordShown ? <FaRegEyeSlash /> : <FaRegEye />}
                                </i>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button> LOGIN </button>
                        </div>
                    </div>
                    <div className={styles.cadastroContainer}>
                        <a href="/cadastro" style={{color: '#333333'}}> cadastre-se </a> 
                        <FaArrowRightLong size={12}/>
                    </div>
                </div>
            </div>
        </div>
    );
}



