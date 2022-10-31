import React from 'react'
import Header from '../../header/Header';
import Nav from '../../nav/Nav';
import './deleteContact.css'


const DeleteContact = () => {
  return (
    <div>
        <Nav/>
        <Header type='list'/>
    <div className='removeContact'>
        <div className="removeContactContainer">
        <form action="post" className='removeContactForm'>
                <div className="removeContactDesc">Remove Contact</div>
                <label htmlFor="name" className='removeContactLabel'>
                    <input type="text" placeholder='Name' className='removeContactInput'/>
                </label>
                <label htmlFor="name" className='removeContactLabel'>
                    <input type="number" placeholder='+2348030000000' minLength={11} min={0}  className='removeContactInput' required />
                </label>
                <div className="removeContactLabel">
                <button className='removeContactBtn'>Remove Contact</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default DeleteContact;