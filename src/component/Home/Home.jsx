import React from 'react'
import Header from '../header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from '../nav/Nav'
import './home.css'
import Mailer from '../mailer/Mailer';

const Home = () => {
  return (
    <div>
        <Nav/>
        <Header />
        <div className="home">
            <div className="homeContainer">
                <div className="homeItem">
                    <span className="homeText">
                    <FontAwesomeIcon icon={faPeopleGroup} className='homeIcon' />
                        Search to find someone you know before, but you lost their contact<span><button className='homeBtn'> Search contact</button></span>
                        </span>
                    <span className="homeText"><button className="homeBtn">Register</button>
                       to save as much number as you want for free as long as three year 
                    </span>  
                </div>
                <div className="homeDesc">
                    All records kept will be avialable for free within the period of three years without having to pay a dime, it is absolutely free <span><button className="homeBtn">Commence!!</button></span>
                </div>
            </div>
        </div>
        <Mailer/>
        </div>
  )
}

export default Home