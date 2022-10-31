import React from 'react'
import Header from '../../header/Header'
import Nav from '../../nav/Nav'
import './addContact.css'

const PhoneContact = () => {
  return (
    <div>
        <Nav/>
        <Header type="list"/>
    <div className='phone'>
        <div className="phoneContainer">
        <form action="post" className='phoneForm'>
                <div className="phoneDesc">Add Contact</div>
                <label htmlFor="name" className='phoneLabel'>
                    <input type="text" placeholder='Name' className='phoneInput'/>
                </label>
                <label htmlFor="name" className='phoneLabel'>
                    <input type="number" placeholder='+2348030000000' minLength={11} min={0}  className='phoneInput' required />
                </label>
                <div className="phoneLabel">
                <button className='phoneBtn'>Save </button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default PhoneContact