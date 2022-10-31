import React from 'react'
import Header from '../../header/Header'
import Nav from '../../nav/Nav'
import './login.css'

const Login = () => {
  return (
    <div>
        <Nav/>
        <Header type="list"/>
        <div className='login'>
        <div className="loginContainer">
            <form action="post" className='loginForm'>
                <div className="loginDesc">Login</div>
                
                <label htmlFor="email" className='loginLabel'>
                    <input type="email" placeholder='Email' required className='loginInput' />
                </label>
                <label htmlFor="password" className='loginLabel'>
                    <input type="password" placeholder='Password' required className='loginInput'/>
                </label>
                <div className="loginLabel">
                <button className='loginBtn'>Submit</button>
                </div>
            </form>
        </div></div>
        </div>
  )
}

export default Login