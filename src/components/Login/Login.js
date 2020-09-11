import React, { useState } from 'react';

import { useContext } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import {initializeLoginrFramework, handleSignin, handleSignOut } from './LoginManager';


function Login() {
  const [newUser,setNewuser] =useState(false);
  const [user,setUser] =useState({
    isSignIn:false,
    name:'',
    email:'',
    password:'',
    photo:''
  });
  initializeLoginrFramework();

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history =useHistory();
  const location= useLocation()
  let { from } = location.state || { from: { pathname: "/" } };

 const googleSignIn=()=>{
    handleSignin()
    .then(res=> {
        setUser(res)
        setLoggedInUser(res);
        history.replace(from);
    })

 }

 const signOut=()=>{
    handleSignOut()
    .then(res=>{
        setUser(res);
        setLoggedInUser(res)
    })
 }

  const handleBlur =(event)=>{
  
      let isFormValid=true;
     if(event.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
      console.log(isFormValid);
     }
     if(event.target.name === 'password'){
       const isPasswordValid=event.target.value.length > 6;
       const isNumberHas=/\d{1}/.test(event.target.value);
    
       isFormValid= isPasswordValid && isNumberHas;
       console.log(isFormValid);
     }
     if(isFormValid){
    
          const newUserInfo = {...user};
          newUserInfo[event.target.name] =event.target.value;
          setUser(newUserInfo);
         }
  }

  const handleSubmit=(e)=>{
    console.log(user.email, user.password);
      if(newUser && user.email && user.password){
    
      }
      if(!newUser && user.email && user.password){
      
      }
      e.preventDefault();
  }


  return (
    <div style={{textAlign:'center'}}>
  { user.isSignIn ? <button onClick={signOut}>Sign out</button> : <button onClick={googleSignIn}>Sign in</button>} 
  <br/>
  <button >Log in using Facebook</button>

    {
      user.isSignIn && <div> 
      <p>Welcome, {user.name}</p>
      <p>your email {user.email}</p>
      <img src={user.photo} alt='' />
      </div>
    }

    <h1>Our own athuentication </h1>
    <input type="checkbox" onChange={()=> setNewuser(!newUser)} name="newUser" id=""/>
    <label htmlFor="newUser">New user registration</label>
   <form onSubmit={handleSubmit}>
  {newUser &&   <input type='text' onBlur={handleBlur} name='name'  placeholder='your name'/>}
   <br/>
   <input onBlur={handleBlur} type='text' name="email"  placeholder="Your email here" required />
    <br/>
    <input onBlur={handleBlur} type="password" name='password' id='' placeholder="Your password here" required/>
    <br/>
    <input  type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
   </form>
   {user.success && <p style={{color:'green'}}> User {newUser ? 'created' : 'Logedin'} Successfully</p>}
   <p style={{color:'red'}}>{user.error}</p>
    </div>
  );
}

export default Login;
