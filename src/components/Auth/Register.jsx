import React, {useState} from 'react';
import axios from 'axios';

const Register = ({onComponentChange}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
        } catch (error) {
            // handle errors
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="nameinput">Name</label>
                <input onChange={e => setName(e.target.value)}  type="text" className="form-control" id="nameinput" placeholder="Enter your name..." />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email..." />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password..." />
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
