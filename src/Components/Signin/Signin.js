import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'
export const Signin = () => { 
  const[in_email,setIn_email]=useState('');
  const[in_pass,setIn_pass]=useState('');
  const [error,setError]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(in_email.length==0){
      setError(true);
    }
    else if(in_pass.length<=8){
      setError(true);
    }else{
    alert(`Sign in Successfully
           Check the data 
            Email : ${in_email},
        Password : ${in_pass}
    `);
    setIn_email("");
    setIn_pass("");
    setError("");
  }
  }
  return (
    <div className='Main-container'>
    <div className='Mini-container'>
      <form onSubmit={handleSubmit}>
     <h1>Welcome Back </h1>
     <p>Please enter your login and password</p>
      <label>Email or Mobile Number</label> <br></br>
      <input onChange={e=>setIn_email(e.target.value)} value={in_email} type="email" placeholder='Example@email.com'></input><br/>
     {error && in_email.length<=0?<label className='error'>Enter Valied Email</label>:""} <br></br>
      <label>Password</label> <br></br>
      <input onChange={e=>setIn_pass(e.target.value)} value={in_pass} type="password" placeholder='Enter your password'></input><br/>
      {error && in_pass.length<=8?<label className='error'>be at least 8 characters long </label>:""} <br></br>
      <a href='' className='fpss' >Forgot Password ?</a> <br></br>
      <button >Sign in</button>
      <p>Create your own Account ? <Link to="/signup">Sign up</Link></p>
      </form>
     
    </div></div>
  )
}
