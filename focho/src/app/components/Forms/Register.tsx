'use client';
import React,{useEffect,useRef, useState} from 'react'
import './register.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Register = () => {
  //declare the use states variables
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const form =useRef(null);
  const [show,showForm]=useState(true);

  // const [image, setImage] = useState(null);
  // const [submitted, setSubmitted] = useState(false);
  
  // // a function to handle the submit event
  // const handleSubmit=()=>{
  //   // e.preventDefault();
  //   alert(`Name: ${name}\nEmail: ${email}\nRole: ${role}`);
  //   // <Intern name={name} email={email} password={password}></Intern>
  // }

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nRole: ${role}`);
    const intern={name,email,password,role};
    try {
      const res = await axios.post("/api/intern",intern);
      
      if (res.status == 200) {
        alert("Inserted intern!!!");
          
        window.location.href = '/pages/login';  // Redirect using window.location
          
        } else if (res.status == 209) {
          alert("Intern already exists");
          // form.current.reset();
        } else {
          alert("Please try again");
        }
      
} catch (error) {
    console.error("Error occurred:", error);
    alert("An error occurred, please check the console for details.");
}
  };
  return (
    <div className={show?"container":"hidden fade"} >
        <form className='form' onSubmit={HandleSubmit} ref={form}>
        <FontAwesomeIcon icon={'times'} id="icon" className='float-right' onClick={()=>showForm(false)}></FontAwesomeIcon>
                 
            <h1 className='text-center font-bold text-lg'>Register</h1>
            <label htmlFor="fname">Name</label>
            <input type="text" id="fname" value={name} onChange={(e)=>setUsername(e.target.value)} placeholder="Your name.." required/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email.." required/>

            <label htmlFor="pw">Password</label>
            <input type="password" id="pw" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password.." min={4} required/>
           
            {/* <label>Profile Image:</label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" required />
              <br /> <br /> */}
            <label htmlFor="">Roles</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="">Select Role</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Manager</option>
            </select>
            <button type="submit" className='btn btn-primary ml-7' >Create your account</button>
        </form>
    </div>
  )
}

export default Register
