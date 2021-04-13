import React, {useState} from 'react';
import axios from 'axios';

const Register = ({onComponentChange}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('http://localhost:8000/api/auth/signup', {
                name,    
                email,
                password,
                password_confirmation: passwordConfirmation
            });
            
            localStorage.setItem('name', data.name);
            localStorage.setItem('user_id', data.id);
            localStorage.setItem('token', data.access_token);

            window.location = "/";
        } catch (error) {
            if(error.response.data.errors.name){
               setNameError(error.response.data.errors.name[0])
            }
            if(error.response.data.errors.email){
               setEmailError(error.response.data.errors.email[0])
            }
            if(error.response.data.errors.password){
                setPasswordError(error.response.data.errors.password[0])
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="nameinput">Name</label>
                <input onChange={e => setName(e.target.value)}  type="text" className={`form-control ${nameError? 'is-invalid' : ''}`} id="nameinput" placeholder="Enter your name..." />
                {
                    nameError && <div className="invalid-feedback">{nameError}</div>
                }
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input onChange={e => setEmail(e.target.value)} type="email" className={`form-control ${emailError? 'is-invalid' : ''}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email..." />
                {
                    emailError && <div className="invalid-feedback">{emailError}</div>
                }
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" className={`form-control ${passwordError? 'is-invalid' : ''}`} id="exampleInputPassword1" placeholder="Enter your password..." />
                {
                    passwordError && <div className="invalid-feedback">{passwordError}</div>
                }
            </div>
            <div className="form-group">
                <label for="exampleInputPassword2">Confirm Password</label>
                <input  onChange={e => setPasswordConfirmation(e.target.value)}type="password" className="form-control" id="exampleInputPassword2" placeholder="Enter your password confirmation..." />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            <small className="form-text text-muted">Already have an account <span className="text-primary" style={{cursor: "pointer", textDecoration: "none"}} onClick={onComponentChange}>Signin</span></small>
        </form>  
    )
}

export default Register
