import React from 'react'
import Header from '../../header/Header'
import Nav from '../../nav/Nav'
import './findContact.css'

const FindRecord = () => {
  return (
    <div>
      <Nav/>
      <Header type='list'/>
    <div className='findRecord'>
       <div className="findContactContainer">
        <form action="post" className='findContactForm'>
                <div className="findContactDesc">Search Contact</div>
                <label htmlFor="name" className='findContactLabel'>
                    <input type="text" placeholder='Name' value='Name' className='findContactInput'/>
                </label>
                <label htmlFor="name" className='findContactLabel'>
                    <input type="number" value='Name' placeholder='+2348030000000' minLength={11} min={0}  className='findContactInput' required />
                </label>
                <div className="findContactLabel">
                <button className='findContactBtn'>Search</button>
                </div>
            </form>
        </div>
       </div></div>
  )
}

export default FindRecord