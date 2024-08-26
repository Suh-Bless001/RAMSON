'use client';
import React, { useState } from 'react'
import axios from 'axios';

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const HandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email: ${email}`);
        const intern={email,password};
        try {
          const res = await axios.post("/api/intern/login",intern);
          if (res.status == 200) {
            alert(`Welcome ${email}!!!`);
              
            window.location.href = '/pages/project';  // Redirect using window.location
              
            }else {
              alert("Please try again");
            }
    
        }catch(err){

        }   
    } 
  return (
    <div className="container mt-3">
  <h2>Stacked form</h2>
  <form onSubmit={HandleSubmit}>
    <div className="mb-3 mt-3">
      <label htmlFor="email">Email:</label>
      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Password:</label>
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
    </div>
    <div className="form-check mb-3">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
      </label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>

  )
}

export default Page
