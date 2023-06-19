import React from 'react';
import './navbar.css';
import userLogo from '../../assets/logos/user-logo.png';
import exit from '../../assets/logos/exit.png';
import logo from '../../assets/logos/logo.png';

const Navbar = () => {
  return (
    <div>
      <div className='navbar-container'>
        <div className='navbar-logo'>
            <img src={logo} alt='logo' />
        </div>
        <div className='navbar__user-logout-container'>
          <div className='usernamelogo-container'>
            <div className='text-username'>
                Username
            </div>
            <div className='image-container'>
                <img src={userLogo} alt='user-logo' style={{
                    borderRadius: '50%',
                    backgroundColor: '#ECFDFF',
                    height: '50px',
                    width: '50px'
                }}/>
            </div>
          </div>
          <div className='navbar__logout'>
            <img src={exit} alt='exit-logo' style={{
                width: '30px',
                height: '30px'
            }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar