import React from 'react';
import { useState } from 'react';

function AuthForm()
{
    const [login , setLogin] = useState(true);

    return (
        <div className='container'>
            <div className="form-container">
                <div className="form-toggle">
                    <button className={login ? "active" : ""} onClick={ () => { setLogin(true) } }> Login </button>
                    <button className={!login ? "active" : ""} onClick={ () => { setLogin(false) } }> SignUp </button>
                </div>
                {login ? 
                    <div className='form'>
                        <h2> Login Form </h2>
                        <input type="email" name="" placeholder='Email Address' />
                        <input type="password" name="" placeholder='Password' />
                        <a href="#"> Forgot Password?</a>
                        <button> Login </button>
                        <p> Not a member? <a onClick={ () => { setLogin(false) } } href="#">SignUp now</a></p>
                    </div> : 
                    <div className='form'>
                        <h2> SignUp Form </h2>
                        <input type="email" name="" placeholder='Email Address'/>
                        <input type="password" name="" placeholder='Password'/>
                        <input type="password" name="" placeholder='Confirm Password'/>
                        <button> SignUp </button>
                        <p> Already a member? <a onClick={ () => { setLogin(true) } } href="#">Login now</a></p>
                    </div>
                }
            </div>
        </div>
    )
}

export default AuthForm;