import React, {useState} from 'react';
import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from './firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);
      if (auth) {
        navigate('/')
      }
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <Link to='/' >
        <img
         className='login__logo'
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM36FHhoCmSbZy58LxOdJHZ2V7QfRZdnvf1pDy8i6ky6Ac0Ja-2A-iYZI1ZzhuHcT_Vgc&usqp=CAU' />
         </Link>

         <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
              <h5>E-mail</h5>
              <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

              <h5>Password</h5>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

              <button onClick={signIn} type='submit' className='login__signInButton'>Sign in</button>
            </form>
            <p>
              By signing-in you agree to the AMAZON FAKE CLONE conditions of use & sale.Please see our Privacy Notice, our cookie and our Interst-Based Ads Notice
            </p>

            <button onClick={e => register} className='login__registerButton'>Create Your Amazon Account</button>
         </div>
    </div>
  )
}

export default Login