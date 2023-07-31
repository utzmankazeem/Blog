import React from 'react';
import {Link} from "react-router-dom";

const Missing = () => {
  return (
    <main className='Missimg'>
        <h1>Missing</h1>
        <p> page not found </p>
        <p><Link to={"/"}>Back Home</Link></p>
    </main>
    
  )
}

export default Missing