import React from 'react'
import ps_logo from '../assets/ps_logo.png'

export default function Login() {
  return (
    <div className='main'>
       <div className='container'>
            <div className='login'>
                <h4>We are NettLINX Technology Pvt. Ltd.</h4>
                <h1>MATERIAL MANAGEMENT SYSTEM</h1>
                <p>With unwavering commitement and expertise, we create spaces that stand as a testament to our dedication and craftmanship</p>
            </div>
            <div className='login-form'>
                    <div className='ps_logo'>
                        <img src={ps_logo} alt='PS Logo'/>
                    </div>
                    <form className='form-container'>
                        <h1>Sign In</h1>
                        <div className='form-group'>
                            <label htmlFor='username'></label>
                            <input type='text' id='username' name='username' placeholder='User name'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'></label>
                            <input type='password' id='password' name='password' placeholder='Password'/>
                        </div>
                        <p className='forgot-psw'>Forgot your password?</p>
                        <button type='submit'>Sign In</button>
                    </form>
            </div>
       </div>
    </div>
  )
}
