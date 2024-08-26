'use client';
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Button from './components/Button/Button';
import Register from './components/Forms/Register';
import Cards from './components/Cards/Cards';

const HomePage = () => {
  const [show,showForm]=useState(false);
  return (
    <div>
      <Button onClick={()=>{
        showForm(!show);
      }}>Register</Button>
      {show && <Register></Register>}
      <Cards></Cards>
    </div>
  )
}

export default HomePage
