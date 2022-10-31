import React from 'react'
import './mailer.css'

const Mailer = () => {
  return (
    <div className='mailer'>
        <div className="mailerContainer">
            <div className="mailerItem">
                <h1 className="mailtitle">
                    Stay Up to date with information from us
                    </h1>
                <span className="mailDesc">
                    Subscribe to our newsletter!!!
                    </span> 
                <div className="mailerWrapper">
                        <input type="text" placeholder='Your Email' className='mailerInput' />
                        <button className='mailerBtn'>Subscribe</button>
            </div></div>
        </div>
    </div>
  )
}

export default Mailer