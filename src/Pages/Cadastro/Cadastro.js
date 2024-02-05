import React, {useState} from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import styles from "./cadastro.module.css"

import Logo from "../../Assets/img-01.png"

export default function Cadatro() {
    const [passwordShown, setPasswordShown] = useState(false);

    const PasswordVisibility = () => {
        setPasswordShown(passwordShown => !passwordShown);
    };

    return(
        <div className={styles.cadastroContainer}>
            <div className={styles.cadastroWrap}>
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className={styles.rightContainer}>
                    <h1> Cadastre-se </h1>
                    
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <h3 className={styles.inputTitle}> Username </h3>
                            <input/>
                        </div>
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
                        <div className={styles.inputContainer}>
                            <h3 className={styles.inputTitle}> Confirmar senha </h3>
                            <div className={styles.passwordContainer}>
                                <input type={passwordShown ? "text" : "password"}/>
                                <i className={styles.eyeIcon} onClick={PasswordVisibility}>
                                {passwordShown ? <FaRegEyeSlash /> : <FaRegEye />}
                                </i>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button> CADASTRAR </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}