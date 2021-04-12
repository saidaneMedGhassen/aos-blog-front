import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'

const Auth = () => {
    const [displayLogin, setDisplayLogin] = useState(true);

    const toggleLogin = () => {
        setDisplayLogin(previousState => !previousState);
    }

    return (
        <div className="container" style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="card p-5" style={{minWidth: "500px"}}>
                {displayLogin? <Login onComponentChange={toggleLogin} /> : <Register onComponentChange={toggleLogin} />}
            </div>
        </div>
    )
}

export default Auth
