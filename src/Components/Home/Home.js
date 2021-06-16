import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import img from './bitmoji.jpeg'

const Home = () => {
    return (
        <div className='home'>
           <div className='title'>
            <h1>
                
                <p>Hello! My name is <span>Busayo.</span> </p>
                <h6>I am a frontend developer. I enjoy building things from scratch and watching it come to life.</h6>
            </h1>
            <div className='linkDiv'> <Link to='/about' className='link'>See More</Link></div>
           
           </div>
           <div className='img'><img src={img} alt='myImage'/></div>
        </div>
    )
}

export default Home
