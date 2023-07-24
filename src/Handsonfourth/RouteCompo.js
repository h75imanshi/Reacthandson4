import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'
import './style.css'
import {Route, Routes} from 'react-router-dom'
function RouteCompo() {
  return (
    <div >
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/Student' element={<Student/>}/>
        <Route path ='/Contact' element={<Contact/>}/>

      </Routes>
    </div>
  )
}

export default RouteCompo;
