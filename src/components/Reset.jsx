import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth';
import { ToastContainer, toast } from 'react-toastify';

function Reset() {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()


  const handleGenerateOTP = async (e) => { 
    e.preventDefault()

    //call the generateOTP service
    const user = await authService.generateOtp({ userName })

    //clear the form
    setUserName("")

    if (user.message == 'Email Sent Successful') {
      navigate('/validateOtp')
      toast("Email sent successful!")
    }
    else {
      toast(user.error)
    }

  }

  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
      <div className='form-container p-5 rounded bg-white'>
        <form onSubmit={handleGenerateOTP}> 
          <h3 className='text-center'>Reset Password</h3>
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
          <div className='d-grid mb-3'>
            <button className='btn btn-primary'>Generate OTP</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reset