import React, {useState} from "react";
import { FaArrowRightLong, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import "./style.css"
import Logo from "../../Assets/img-01.png"

export default function Login() {

    const [passwordShown, setPasswordShown] = useState(false);

    const PasswordVisibility = () => {
        setPasswordShown(passwordShown => !passwordShown);
    };

    return(
        <div className="loginContainer">
            <div className="loginWrap">
                <div className="logoContainer">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="rightContainer">
                    <h1> Login </h1>
                    <div className="formContainer">
                        <div className="inputContainer">
                            <h3 className="inputTitle"> Email </h3>
                            <input type="email"/>
                        </div>
                        <div className="inputContainer">
                            <h3 className="inputTitle"> Senha </h3>
                            <div className="passwordContainer">
                                <input type={passwordShown ? "text" : "password"}/>
                                <i className="eyeIcon" onClick={PasswordVisibility}>
                                {passwordShown ? <FaRegEyeSlash /> : <FaRegEye />}
                                </i>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button> LOGIN </button>
                        </div>
                    </div>
                    <div className="cadastroContainer">
                        <a> cadastre-se </a> 
                        <FaArrowRightLong size={12}/>
                    </div>
                </div>
            </div>
        </div>
    );
}



