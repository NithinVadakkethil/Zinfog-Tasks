import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/images/loginBackground.png';
import logo from '../../assets/logos/logo.png';
import phone from '../../assets/logos/phone.png';
import plus from '../../assets/logos/plusIcon.png';
import './login.css';

const Login = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (username.trim() === '') {
      validationErrors.username = 'Username is required';
    }

    if (password.trim() === '') {
      validationErrors.password = 'Password is required';
    } else if (password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters';
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted');
      setUsername('');
      setPassword('');
      setErrors({});
      navigate('/home');
    } else {
      setErrors(validationErrors);
    }
  };


  return (
    <div>
      <div className='container1'>
        <img src={backgroundImage} alt='bg-image' className='image' />
        <div className='login__wrapper'>
          <img src={plus} alt='plus-icon' className='plus-icon-top-left' />
          <img src={plus} alt='plus-icon' className='plus-icon-right' />
          <img src={plus} alt='plus-icon' className='plus-icon-bottom-left' />
          <div className='login__logo-wrapper'>
            <div className='login__header-logo'>
              <img src={logo} alt='logo' className='image' />
            </div >
          </div>
          <div className='login__header-text'>
            Report Downlad portal
          </div>
          <div className='login__credential-container'>
            <div className='text-login'>Login</div>
            <div className='form-container1'>
              <form onSubmit={handleSubmit}>
                <div className="form-group1">
                  <label htmlFor="username">Username
                    <input
                      placeholder='Enter username'
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    /></label>
                </div>
                <div className="form-group1">
                  <label htmlFor="password">Password&nbsp;&nbsp;&nbsp;
                    <input
                      placeholder='Password'
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    /></label>
                </div>
                <div className="login__submit-btn">
                  <button type='submit' className='login__submit-text'>Submit</button>
                </div>
              </form>
              <div className='login__reset-password'>
                Reset Password
              </div>
            </div>
          </div>
          {errors.username || errors.password ? <div className='login__wrong-credential'>
            Wrong Credentials! your email Id or password entered is wrong
          </div> : ''}
          <div className='login__contact-container'>
            <div className='phone-logo'>
              <img src={phone} alt='phone' style={{
                height: '100%',
                width: '100%'
              }} />
            </div>
            <div className='phone-number'>
              (+91) 9288008801
            </div>
          </div>
          <div className='login_tc'>
            I hereby agree and accept the <span>Terms of service</span> and <span>Privacy policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login