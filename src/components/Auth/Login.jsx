import React, {useState} from 'react'
import axios from "axios";

const Login = ({onComponentChange}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('http://localhost:8000/api/auth/login', {
                email,
                password
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
                <label for="exampleInputEmail1">Email address</label>
                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <small className="form-text text-muted">Don't have an account <span  className="text-primary" style={{cursor: "pointer", textDecoration: "none"}} onClick={onComponentChange}>Register now</span></small>
        </form>       
    )
}

export default Login;
