import React from 'react'
import PropTypes from 'prop-types'

export const CardGeneral = ({ organization, title, year, website, tech, responsibility }) => {
  return (
    <div className='shadow rounded p-3 mb-4 d-flex flex-wrap justify-content-between align-items-center'>
      <div className='col-lg-7 col-md-7'>
        <h4>{title}</h4>
        <a href={website} target='_blank' rel="noreferrer" className='text-decoration-none'>
          <p style={{ color: '#e74343' }}>{organization}</p>
        </a>
        <p><span className='fw-bold'>Tech:</span> {tech}</p>
        <p><span className='fw-bold'>Responsibility:</span> {responsibility}</p>
      </div>
      <div className='col-lg-3 col-md-3 text-end'>
        <time dateTime={year.split(' ')[year.split(' ').length - 1]}><strong>({year})</strong></time>
      </div>
    </div>
  )
}

CardGeneral.propTypes = {
  organization: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  website: PropTypes.string,
  tech: PropTypes.string,
  responsibility: PropTypes.string,
}
