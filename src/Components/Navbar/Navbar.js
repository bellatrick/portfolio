import React, {useState}  from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] =useState(false)
    
    const handleClose = ()=>{
          setOpen(false)
    }
    return (
        <nav className='Navbar'>
           <div className='navContainer'>
               <div className='logo'>
                   <Link className='logoLink' to='/'>BellaDev</Link>
               </div>
               <div className='NavList'>
                  <div className='icon' style={{opacity: !open?1:0}} onClick={()=>setOpen(!open)}><i className='fa fa-bars'></i></div>
                  <div className='icon' style={{opacity: open?1:0}} onClick={()=>setOpen(!open)}><i className='fa fa-times'></i></div>
                  <ul style={{left: open?'0':'-100vh'}}>
                   <li>
                    <Link to ='/' onClick={handleClose}>Home</Link>
                   </li>

                   <li>
                    <Link to ='/about' onClick={handleClose}>Resume</Link>
                   </li>

                   <li>
                    <Link to ='/works' onClick={handleClose}>Works</Link>
                   </li>

                   <li>
                    <Link to ='/contact-me' onClick={handleClose}>Contact me</Link>
                   </li>
                  </ul>
               </div>
            </div> 
        </nav>
    )
}

export default Navbar
