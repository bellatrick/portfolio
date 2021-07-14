import React from 'react'


const Work = ({name, language, description, live, code}) => {
    return (
        <div className='work'>
           <h3>{name}</h3> 
           <p className='language'>{language}</p>
           <p>{description}</p>
         <div className='codeLink'>
          <a href={code} target='_blank' rel="noreferrer"> <p><i className='fa fa-code'></i> Code</p></a>
        <a href={live} target='_blank' rel="noreferrer"><p><i className='fa fa-eye'></i>   Live</p></a> 

       
         </div>
        </div>
    )
}

export default Work
