import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className='nav'>
        <div className="navContainer">
            <span className="logo">Phone Kontat</span>
            <div className="navItem">
               <div className="navBtn">
                <FontAwesomeIcon icon={faArrowRightToBracket} className='navIcon' /> 
                <button className="navButton">Login</button>
                </div>
               <div className="navBtn">
               <FontAwesomeIcon icon={faUser} className='navIcon'/>
               <button className="navButton">Register</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Nav