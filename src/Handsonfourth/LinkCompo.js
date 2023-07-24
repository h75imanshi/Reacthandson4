 import React from 'react'
 import {Link} from 'react-router-dom'

const LinkCompo = () => {
  return (
    <div className='header'>
        <Link to ='/' className='home'>Home</Link>
        <Link to ='/Student' className='s1'>Student</Link>
        <Link to ='/Contact' className='c1'>Contact</Link>
      
    </div>
  )
}

export default LinkCompo;
