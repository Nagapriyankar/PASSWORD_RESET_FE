import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth';
import { ToastContainer, toast } from 'react-toastify';

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignIn = async (e) => {
        e.preventDefault()

        //call the signin service
        const user = await authService.signin({userName, password})

        //clear the form
        setUserName("")
        setPassword("")

        //navigate to dashboard page
        if (user.message == 'Login successful') {
            navigate('/dashboard')
            toast(user.message)
        }
        else {
            toast(user.error)
        }
            

        
    }

    return (
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
            <div className='form-container p-5 rounded bg-white'>
                <form onSubmit={handleSignIn}>
                    <h3 className='text-center'>Sign In</h3>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input
                            type="email"
                            placeholder='Enter name@domain.com...'
                            className="form-control"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}    
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input
                            type="password"
                            placeholder='Enter password...'
                            className="form-control"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>

                    <div className='d-grid mb-3'>
                        <button className='btn btn-primary'>Sign In</button>
                    </div>

                    <p className='text-end mb-3'>
                        Forget Password? <Link to="/reset" className='ms-2'>Reset</Link>
                    </p>

                    <p className='mb-3'>
                        Not Yet Registered? <Link to="/register" className='ms-2'>Sign Up</Link>
                    </p>

                </form>
            </div>
       </div>
      
  )
}

export default Login