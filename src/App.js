import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Education } from './pages/Education'
import { Skill } from './pages/Skill'
import { Certificate } from './pages/Certificate'
import { Contact } from './pages/Contact'
import { Project } from './pages/Project'

export const App = () => {
  return (
    <div>
      <NavBar />
      <div className='container' style={{ padding: "80px 12px 20px 12px" }}>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/project' element={<Project />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}
