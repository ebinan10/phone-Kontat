import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faAddressBook, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = ({type}) => {
  return (
    <>{ type!=="list"?
    (<><div className='header'>
        <div className="headerContainer">
            <div className="headerNav">
            <div className="headerItem active">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <span>Search Contact</span>
            </div>
            <div className="headerItem">
            <FontAwesomeIcon icon={faPerson}/>
            <span>Find Friends</span>
            </div> 
            <div className="headerItem">
            <FontAwesomeIcon icon={faAddressBook} />
            <span>Search Record</span>
            </div></div>
            <h1 className="headerTitle">Keep your Record where you can find them?</h1>
                <p className='headerDesc'>All phone contact can be kept for future use or reference</p>

            <div className="headerButton">
                <button className="headerBtn">SignUp / Create Account</button>
                
            </div>
            
        </div>
    </div></>):(<></>)}</>
  )
}

export default Header