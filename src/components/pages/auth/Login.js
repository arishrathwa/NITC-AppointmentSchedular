import React,{useState} from "react";
import { useNavigate ,Link} from "react-router-dom";



export const Login = ({login,isAuthenticated})=> {

    const navigate = new useNavigate();

    const [formData, setFormData] = useState({
        username:'',
        password:'',
    });

    

    const {username,password} = formData;
    
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})

    const onSubmit = e => {
       
       // e.preventDefault();

        if(password.length >= 6) {   
            //then hit register action
            login(username,password);
            
        }

    }

    if (isAuthenticated)
        return navigate('/dashboard')

    return (
        <div className="container">
            <h1>Sign In</h1>
            <p>To schedule appointment</p>
            <form onSubmit={e=>onSubmit(e)}>
                
                <div className="form-group mt-3">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        name="username"
                        id="username" 
                        value={username}
                        onChange={e => onChange(e)} 
                        required/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        name="password"
                        id="password" 
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6' 
                        required/>
                </div>
                <button className="btn btn-primary mt-3" type='submit'>Sign In</button>
            </form>
            <p className="mt-3">Don't have an account? <Link exact to='/register'>Sign Up</Link></p>
        </div>
    );

}




