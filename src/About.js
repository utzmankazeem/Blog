import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <main className='About'>
       <h1>About</h1>
        <p style={{marginTop: "1rem"}}> Welcome to My react blog aapp</p>
        <p><Link to={"/"}>Back Home</Link></p>
    </main>
  )
}

export default About