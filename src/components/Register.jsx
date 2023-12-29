import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth';
import { ToastContainer, toast } from 'react-toastify';


function Register() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();

    //call the signup service
    const user = await authService.signup({ firstName, lastName, userName, password })

    //cleartheform
    setFirstName('')
    setLastName('')
    setUserName('')
    setPassword('')

    //navigate to signin page
    if (user.message == 'user created') {
      navigate('/')
      toast(user.message)
    }
    else {
      toast(user.error)
    }
  }

  return (
    <div className='register template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
      <div className='form-container p-5 rounded bg-white'>
        <form onSubmit={handleSignUp}>
          <h3 className='text-center'>Sign Up</h3>

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              placeholder='Enter first name...'
              className="form-control"
              value={firstName}
              onChange={(e) => { setFirstName(e.target.value) }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              placeholder='Enter last name...'
              className="form-control"
              value={lastName}
              onChange={(e) => { setLastName(e.target.value) }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email</label>
            <input
              type="email"
              placeholder='Enter email...'
              className="form-control"
              value={userName}
              onChange={(e) => { setUserName(e.target.value) }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input
              type="password"
              placeholder='Enter password...'
              className="form-control"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <div className='d-grid mb-3'>
            <button className='btn btn-primary'>Sign Up</button>
          </div>

          <p className='text-end mb-3'>
            Already Registered? <Link to="/login" className='ms-2'>Sign In</Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Register