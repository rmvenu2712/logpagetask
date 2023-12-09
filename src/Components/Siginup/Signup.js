import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  const [up_email, setUp_Email] = useState('');
  const [up_error, setUp_Error] = useState(false);
  const [up_pass, setUp_Pass] = useState('');
  const [up_name, setUp_Name] = useState('');
  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (up_email.length == 0) {
      setUp_Error(true);
    }
    else if (up_pass.length <= 8) {
      setUp_Error(true);
    }
    else if (up_name.length == 0) {
      setUp_Error(true);
    }
    else {
      alert(`Check the data - 
              Name  : ${up_name},
              Email : ${up_email},
          Password : ${up_pass}`);
      setUp_Email("");
      setUp_Pass("");
      setUp_Name("");
      setUp_Error("");
    }
  }
  return (
    <div className='Main-container'>
      <div className='Mini-container'>
        <h1>Create Your Account </h1>
        <p>Let's get Started</p>
        <form onSubmit={handleSubmit2}>
          <label>Name</label> <br></br>
          <input on type="text" onChange={e => setUp_Name(e.target.value)} value={up_name} placeholder='Enter your name'  ></input><br />
          {up_error && up_name.length <= 0 ? <label className='error'>Enter Name</label> : ""}<br></br>
          <label>Email or Mobile Number</label> <br></br>
          <input onChange={e => setUp_Email(e.target.value)} value={up_email} type="email" placeholder='Example@email.com'></input><br />
          {up_error && up_email.length <= 0 ? <label className='error'>Enter Valied Email</label> : ""}<br></br>
          <label>Password</label> <br></br>
          <input onChange={e => setUp_Pass(e.target.value)} value={up_pass} type="password" placeholder='Enter your password'></input><br />
          {up_error && up_pass.length <= 8 ? <label className='error'>be at least 8 characters long</label> : ""} <br></br>
          <a href='' className='fpss' >Forgot Password ?</a> <br></br>
          <button  >Sign up</button>
          <p>Already you have an Account ?<Link to={'/signin'}>Sign in</Link></p>
        </form>

      </div></div>
  )
}
