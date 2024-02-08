import React, {useState} from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import styles from "./cadastro.module.css"

import Logo from "../../Imagens/img-01.png"

import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";

export default function Cadatro() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [error, setError] = useState('');


    const PasswordVisibility = () => {
        setPasswordShown(passwordShown => !passwordShown);
    };

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        senha: "",
        confirmSenha: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setError('');

        if (!formData.username || !formData.email || !formData.senha || !formData.confirmSenha) {
            setError("Campos incompletos");
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setError("Usuário cadastrado com sucesso!");
                setFormData({
                    username: "",
                    email: "",
                    senha: "",
                    confirmSenha: ""
                });
            } else {
                setError("Erro ao cadastrar usuário");
            }
        } catch (error) {
            console.error('Houve um erro, tente novamente!', error);
            setError("Houve um erro, tente novamente!");
        }
    };


    return(
        <div className={styles.cadastroContainer}>
            <div className={styles.cadastroWrap}>
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className={styles.rightContainer}>
                    <h1 className={styles.header}> Cadastre-se </h1>
                    
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <h3 className={styles.inputTitle}> Username </h3>
                            <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
                        </div>
                        <div className={styles.inputContainer}>
                            <h3 className={styles.inputTitle}> Email </h3>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className={styles.inputContainer}>
                            <h3 className={styles.inputTitle}> Senha </h3>
                            <div className={styles.passwordContainer}>
                            <input type={passwordShown ? "text" : "password"} name="senha" value={formData.senha} onChange={handleInputChange} />
                                <i className={styles.eyeIcon} onClick={PasswordVisibility}>
                                {passwordShown ? <FaRegEyeSlash /> : <FaRegEye />}
                                </i>
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <h3 className={styles.inputTitle}> Confirmar senha </h3>
                            <div className={styles.passwordContainer}>
                            <input type={passwordShown ? "text" : "password"} name="confirmSenha" value={formData.confirmSenha} onChange={handleInputChange} />
                                <i className={styles.eyeIcon} onClick={PasswordVisibility}>
                                {passwordShown ? <FaRegEyeSlash /> : <FaRegEye />}
                                </i>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.cadastroButton}onClick={handleFormSubmit}> CADASTRAR </button>
                        </div>
                        <ErrorMessage message={error} />
                    </div>
                </div>
            </div>
        </div>
    );
}