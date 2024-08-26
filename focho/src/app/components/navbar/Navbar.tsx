'use client';
import React, { useState } from 'react'
import "./navbar.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
const Navbar = () => {
  //functions or methods insertions
  const [toggle,SetToggle]=useState(true);
  function handleCheck(){
    SetToggle(!toggle);
  }
  return (
    <nav>
      <input type="checkbox" name="" id="check" />
      <label htmlFor="check" className='icon' onClick={handleCheck}>
        <FontAwesomeIcon icon={toggle?'bars':'times'} id="icon"></FontAwesomeIcon>
      </label>
      <label className="logo" htmlFor="">RES</label>
      <ul className={toggle?"remove":"put"}>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/pages/About">ABOUT US</Link></li>
        <li><Link href="#">SERVICE</Link></li>
        <li><Link href="#">CONTACT</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
