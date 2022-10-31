import React,{useState} from 'react'
import Header from '../../header/Header'
import Nav from '../../nav/Nav'
import './signUp.css'

const SignUp = () => {
    const [password, setPassword] = useState("password")
  return (
    <div>
    <Nav/>
    <Header type='list'/>
    <div className='signup'>
        <div className="signupContainer">
            <form action="post" className='signupForm'>
                <div className="signupDesc">Register</div>
                <label htmlFor="name" className='signupLabel'>
                    <input type="text" placeholder='FirstName' className='signupInput'/>
                </label>
                <label htmlFor="name" className='signupLabel'>
                    <input type="text" placeholder='LaststName' className='signupInput' />
                </label>
                <label htmlFor="email" className='signupLabel'>
                    <input type="email" placeholder='Email' required className='signupInput' />
                </label>
                <label htmlFor="password" className='signupLabel'>
                    <input type={password} required placeholder='Password' className='signupInput'  />
                </label>
                <div className="signupLabel">
                <button className='signupBtn'>Submit</button>
                </div>
            </form>
        </div>
    </div></div>
  )
}

export default SignUp