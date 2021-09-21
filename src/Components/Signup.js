import React,{useRef} from 'react'
import {auth} from '../Firebase/firebase'

const Signup = () => {
    const email=useRef(null);
    const password=useRef(null);
    const registerUser=auth.createUserwithEmailAndPassword(
        email.current.value, password.current.value
    ).then(user =>
        console.log(user)).catch(err=>console.log(err.message));
    return (
        <div>
            <label for='emailaddress'>Enter Your Email</label>
            <input type="email" ref={email} className="emailaddress"/>
            <label for='password'>Enter Your Password</label>
            <input type="email" ref={password} className="emailaddress"/>
            <button type="submit" onClick={registerUser}>SignUp</button>
        </div>
    )
}

export default Signup
