import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import img from '../Home/bitmoji.jpeg'

const about = () => {
    return (
        <div className='about'>
            
            <img width='50px' height='50px' src={img} alt='myImage'/><h1 className='name'>Samuel, Busayo Gloria</h1>
           <section className='aboutDiv'>
            <p>I am a frontend software developer who is passionate about working with code, and building smooth and user friendly user interface.</p>
            <h4>Core Technologies</h4>
            <p>HTML/CSS/SASS, Javascript(Ecma script), React JS, React Native, Redux</p>   
        <h4>Experience</h4>
        <p className='subDiv'>Anter Technologies Internship <span>(February 2021- Till date)</span></p>
        {/* <p className='subDiv'>February 2021- Till date</p> */}
        <p><i className='fa fa-circle'></i>  I worked with a team to develop a functional E-commerce website using only vanilla javacript and SASS at the frontend, and node JS at the back end</p>
        <p><i className='fa fa-circle'></i>  I built a replica of the 'Who wants to be a millionaire" web application using vanilla Javascript</p>
        <p><i className='fa fa-circle'></i>  I used react Js and commerce JS API to build an ecommerce website</p>
        <h4>Education</h4>
        <p>University of Ilorin</p>
        <p>2014-2018</p>
        <h4>Projects</h4>
        <p>Links to my works can be found <Link to='/works'>here</Link></p>
         </section>
        </div>
    )
}

export default about
