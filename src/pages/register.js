import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles.css';
// import { ValidateEmail, CheckPassword } from "../marketFunctions";

const Register = () => {
    
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
        const signUpData = { email, password};
        // console.log(signUpData);
    }
    return(
        <>
            <div className='reg-outer-container'>
            <div className="register-container">
                <h2>Create a new account</h2>
                <form onSubmit={handleSubmit}>
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
                        {/* {(<p className='wrong-msg'>Password should be between (8 - 15 characters) <br />which contain at least one lowercase letter, one numeric digit, <br />and one special character</p>)} */}
                    </label>
                    <button type='submit'>Sign Up</button>
                    <div className='login-link-container'>
                        <p><Link className="login-nav-links" to="/login">Already have an account?</Link></p>
                    </div>
                </form>
            </div>
            </div>
        </>
    );
};

export default Register;