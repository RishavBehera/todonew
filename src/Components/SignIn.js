import React,{useRef,useState} from 'react'
import {useHistory} from 'react-router-dom'
import SignUp from './Signup'

const SignIn = () => {
    const email=useRef(null);
    const password=useRef(null);
    const [signUp,setSignUp]=useState(false);
    const history=useHistory();
    const signinaction= (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            email.current.value,
            password.current.value
        ).then(user =>{
            console.log(user);
        }).catch(err =>{
            alert(err.message)
        })
        history.push('/welcome');

    }
    const signinaction=() =>{
        setSignUp(true);
    }
    return (
        <div>
            {signUp?<SignUp/>:
            <>
            <label for='emailaddress'>Enter Your Email</label>
            <input type="email" ref={email} className="emailaddress"/>
            <label for='password'>Enter Your Password</label>
            <input type="email" ref={password} className="emailaddress"/>
            <button type="submit" onClick={signinaction}>SignUp</button>
            <div>
                <span>New User?</span>
                <button onClick={openSignUp}>SignUp</button>
            </div>
            </> 
            }
        </div>
    )
}

export default SignIn
