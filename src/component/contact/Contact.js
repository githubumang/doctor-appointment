import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <div className='px-3'>
        <div className='text-xl font-bold'>Contact me: </div>
        <Link to={"https://github.com/githubumang" } className='font-bold text-blue-500'>Github</Link> <br/>
        <Link to={"https://www.linkedin.com/in/umang-agrawal-25a244200/" }className='font-bold text-blue-500'>Linkedin</Link><br/>
        See my resume <Link to={"https://bit.ly/Umang-Agrawal-Resume"} className='font-bold text-blue-500'>here</Link>.
    </div>
  )
}
