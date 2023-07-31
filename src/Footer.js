import React from 'react'

const Footer = () => {
    const today = new Date();
    
    return (
      <footer className='Footer'>
          <small>copyright  &copy;einpointApp. {today.getFullYear()}</small>
      </footer>
    )
  }

export default Footer