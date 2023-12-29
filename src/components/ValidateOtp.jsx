import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth';
import { ToastContainer, toast } from 'react-toastify';

function ValidateOtp() {

  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()

  const handleValidateOtp = async (e) => {
    e.preventDefault()
    console.log('validate')

    //validate otp by checking against database
    const user = await authService.validateOtp({ otp, password })
    
    if (user.message == 'PWD Reset Successful') {
      navigate('/')
      toast("Login with new password")
    }
  }

  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
      <div className='form-container p-5 rounded bg-white'>
        <form onSubmit={handleValidateOtp}>
          <h3 className='text-center'>Reset Password</h3>

          <div className="mb-3">
            <label htmlFor="OTP" className="form-label">One Time Password</label>
            <input
              type="String"
              placeholder='Enter OTP...'
              className="form-control"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Enter New Password</label>
            <input
              type="String"
              placeholder='Enter new password'
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>

          <div className='d-grid mb-3'>
            <button className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ValidateOtp