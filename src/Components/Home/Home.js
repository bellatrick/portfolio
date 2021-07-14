import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import img from './bitmoji.jpeg'

const Home = () => {
    return (
        <div className='home'>
            <div className='img'><img src={img} alt='myImage'/></div>
           <div className='title'>
            <h1>
                
              <div className='header'> <p>Hello! Welcome to my personal portfolio  </p></div> 
                <h6>My name is <span>Busayo</span> and I am a frontend developer. I enjoy building things from scratch and watching it come to life.</h6>
            </h1>
            <div className='linkDiv'> <Link to='/about' className='link'>See More</Link></div>
           
           </div>
           
        </div>
    )
}

export default Home
