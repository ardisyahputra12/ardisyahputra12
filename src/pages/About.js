import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='d-flex flex-wrap justify-content-between align-items-center mt-5'>
      <div className='col-lg-6 pb-5 text-center'>
        <img
          src={process.env.PUBLIC_URL + '/img/ardi-saputra.jpg'}
          alt='ardi-saputra'
          width='70%'
          className='rounded-circle shadow' />
      </div>
      <div className='col-lg-6 pb-5'>
        <h2 className='pb-4' style={{ fontSize: '40px', fontWeight: 700 }}>
          Ardi Saputra
          <br />
          <strong style={{ color: '#e74343', fontSize: '34px', fontWeight: 500 }}>
            Fullstack Developer
          </strong>
        </h2>
        <p style={{ fontSize: '18px' }}>
          Hello, this is my portfolio.
          <br /> I am a software developer who has a willingness to learn new things, and is able to work individually as well as in teams. My journey in programming is started in 2020. I am able to build applications for web and mobile (Android) platforms, also build APIs.
        </p>
        <div>
          <Link to='https://github.com/ardisyahputra12' className='me-4'>
            <FaGithub size='40' fill='#fff' />
          </Link>
          <Link to='https://www.linkedin.com/in/ardisaputra2022/' className='me-4'>
            <FaLinkedin size='40' fill='#fff' />
          </Link>
        </div>
      </div>
    </div>
  )
}
