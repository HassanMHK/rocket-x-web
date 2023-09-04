import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles.css';
// import { ValidateEmail, CheckEmpty } from "../marketFunctions";

const Login = () => {
    
    const [inputs, setInputs] = useState({});
    // const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = inputs.email;
        const password = inputs.password;
        const loginData = {
            email,
            password,
        };
    }

    return(
        <>
            <div className='login-outer-container'>
            <div className="login-container">
                <h2>Log in</h2>
                <form>
                    <label>Email:
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email"
                        required
                        value={inputs.email || ""} 
                        onChange={handleChange}
                        />
                        {/* {<p className='wrong-msg'>You have entered an invalid email address!</p>} */}
                    </label>
                    <label>Password:
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Enter your password"
                            required
                            value={inputs.password || ""} 
                            onChange={handleChange} 
                        />
                        {/* {<p className='wrong-msg'>Enter your password</p>} */}
                    </label>
                    <button onClick={handleSubmit}>Log in</button>
                    <div className='register-link-container'>
                        <Link className="register-nav-link" to="/register"><button className='register-button'>Create new account</button></Link>
                    </div>
                </form>
            </div>
            </div>
        </>
    );
};

export default Login;