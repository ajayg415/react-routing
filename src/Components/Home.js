import React, { useState } from 'react';

const Home = eve =>{
  const [name, setName] = useState('');
  const handleClick = () =>{
    eve.click(name)
  }
  return (
    <>
    Name: <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type='submit' value='Submit' onClick={handleClick}/>
    </>
  )
}

export default Home;