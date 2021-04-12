import React from 'react'

const Nav = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('name');

        window.location = "/login";
    }

    return (
        <nav className="my-nav mb-5">
            <h3>AOSBlog</h3>
            <button className="btn btn-danger" onClick={handleLogout}>Disconnect</button>
        </nav>
    )
}

export default Nav
