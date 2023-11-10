import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Register = ({ register, isAuthenticated }) => {

    const navigate = new useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        re_password: ''
    })

    const [accountCreatedStatus, setAccountCreatedStatus] = useState(false)

    const { username, password, re_password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async (e) => {
        e.preventDefault();

        if (password === re_password && password.length() >= 8) {
            //then hit register action
            await register(username, password, re_password);
            setAccountCreatedStatus(true);
        }

    }

    if (isAuthenticated)
        return navigate('/dashboard')
    else if (accountCreatedStatus)
        return navigate('/login')



    return (
        <div className="col-sm-6 card container mt-5">
            <div class="card-body">
                <h1 class="card-title">Registration</h1>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            
            
            
            <form onSubmit={e => onSubmit(e)}>

                <div className=" form-group mt-3">

                    
                    <select name="types" class="form-select mb-3" aria-label="Default select example">
                        <option selected>Select Category</option>
                        <option value="1">Student</option>
                        <option value="2">Faculty</option>
                        <option value="3">Guest</option>
                    </select>

                    {/* <label htmlFor="username" className="form-label">
                        Username:
                    </label> */}
                    <input type="text"
                        className="form-control"
                        placeholder="Email Id"
                        name="username"
                        id="username"
                        value={username}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className="form-group mt-3">
                    {/* <label htmlFor="password" className="form-label">
                        Password:
                    </label> */}
                    <input type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required />
                </div><div className="form-group mt-3">
                    {/* <label htmlFor="re_password" className="form-label">
                        Confirm Password:
                    </label> */}
                    <input type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="re_password"
                        id="re_password"
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required />
                </div>
                <button className="btn btn-primary mt-3" type='submit'>Register</button>
            </form>
            <p className="mt-3">Already have an account? <Link exact to='/login'>Sign In</Link></p>
        </div>
        </div>
    );

}


