// Modules Imported :
import React from 'react'
import { Link } from 'react-router-dom';
import './signup.css';

// Font Awesome Icons Imported :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';


// Images Imported :
import arrow from '../assets/arrow.png';
import user from '../assets/user.png';
import email from '../assets/email.png';
import password from '../assets/password_key.jpg';

function Signup() {
  return (
    <div className='container'>
      <div className='main'>
        <div className='box1'>
          <div className='box1-content'>
            <div className='member'>
              <Link to="/login">
              <button className='circle'>
                <FontAwesomeIcon icon={faArrowLeftLong} className='arrow'/>
              </button>
              </Link>
              <h3>Already member? &nbsp;<Link to="/login" className='Sign'>Sign in</Link></h3>
            </div>
            <div className='heading'>
              <div className='head'>
                <h1>Signup</h1>
                <p>Secure your communication with us!</p>
              </div>
                <img src={arrow} alt="Logo" />
            </div>
            <form>
              <div className='inputBox'>
                <label htmlFor='name'><img src={user} alt='User'/></label>
                <input type='text' className='inputOutline'/>
              </div>
              <div className='inputBox'>
                <label htmlFor='email'><img src={email} alt='User'/></label>
                <input type='text' className='inputOutline'/>
              </div>
              <div className='inputBox'>
                <label htmlFor='password'><img src={password} alt='User'/></label>
                <input type='text' className='inputOutline'/>
              </div>
              <button type='button' className='SignBtn'>
                <h3>Sign Up</h3>
                <div className='circleBtn'>
                  <FontAwesomeIcon icon={faArrowRightLong} className='arrow'/>
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className='box11'></div>
        <div className='box14'>
          <div className='box15'></div>
        </div>
        
        <div className='box2'>
          <div className='box12'></div>
          <div className='box13'></div>
          
        </div>
      </div>
    </div>
  )
}

export default Signup