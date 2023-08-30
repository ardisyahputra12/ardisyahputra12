import React from 'react'
import { CardSquare } from '../components/CardSquare'
import { projects } from '../data/project.data'

export const Project = () => {
  return (
    <>
      <h2 className='text-center mb-5' id="project">Project</h2>
      <div className='d-flex flex-wrap justify-content-between'>
        {
          projects.map(project => {
            return <CardSquare {...project} key={project.id} />
          }).reverse()
        }
      </div>
    </>
  )
}
