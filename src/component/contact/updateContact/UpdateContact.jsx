import React from 'react'
import Header from '../../header/Header'
import Nav from '../../nav/Nav'
import './updateContact.css'

const UpdateContact = () => {
  return (
    <div>
        <Nav/>
        <Header type='list'/>
    <div className='updateContact'>
        <div className="updateContactContainer">
        <form action="post" className='updateContactForm'>
                <div className="updateContactDesc">Update Contact</div>
                <label htmlFor="name" className='updateContactLabel'>
                    <input type="text" placeholder='Name' className='updateContactInput'/>
                </label>
                <label htmlFor="name" className='updateContactLabel'>
                    <input type="number" placeholder='+2348030000000' minLength={11} min={0}  className='updateContactInput' required />
                </label>
                <div className="updateContactLabel">
                <button className='updateContactBtn'>Update</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default UpdateContact