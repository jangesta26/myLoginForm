import { useState } from "react";
import React from "react";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { PiEyeBold } from "react-icons/pi";
import { PiEyeClosedBold } from "react-icons/pi";


const LoginForm = () => {

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState('');

    const handleToggle = () => {

        if (type==='password'){
            setIcon(<PiEyeClosedBold />);
            setType('text')
        } else {
            setIcon(<PiEyeBold />)
            setType('password')
        }
    };

    return (
        <div className="wrapper">
            <form action="">
                <h1>Sign in <GiPlagueDoctorProfile /> </h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type = {type}
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password" />
                        <span onClick={() => handleToggle()} icon={icon}>
                            { type==="password"? <PiEyeClosedBold className="icon"/> : <PiEyeBold className="icon"/>}
                        </span>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#something">Forgot password?</a>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account?<a href="#something">Register</a></p>
                </div>

            </form>
        </div>
    );
};

export default LoginForm;