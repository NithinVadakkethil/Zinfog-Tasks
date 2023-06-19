import React from 'react';
import phone from '../../assets/logos/phone.png';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='footer-copyright'>
          Copyright © 2023 Access Home Lab Solutions
        </div>
        <div className='footer-phoneNumberContainer'>
          <div className='phone-logo'>
            <img src={phone} alt='phone' style={{
              height: '100%',
              width: '100%'
            }} />
          </div>
          <div className='footer__phone-number'>
            (+91) 9288008801
          </div>
        </div>
        <div className='footer-tc'>
          Terms and Conditions &nbsp; Privacy Policy
        </div>
      </div>
    </div>
  )
}

export default Footer