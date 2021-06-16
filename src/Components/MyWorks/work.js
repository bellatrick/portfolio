import React from 'react'
import {Link} from 'react-router-dom'

const Work = ({name, language, description}) => {
    return (
        <div className='work'>
           <h3>{name}</h3> 
           <p>{language}</p>
           <p>{description}</p>
         <div className='codeLink'>
         <p><i className='fa fa-eye'></i> <Link to='/millionaire'>Live</Link></p>
         <p><i className='fa fa-code'></i>   Code</p>
         </div>
        </div>
    )
}

export default Work
