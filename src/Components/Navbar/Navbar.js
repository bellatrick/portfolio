import React, {useState}  from 'react'
import './styles.css'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] =useState(false)
    const location = useLocation()
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
                  <ul style={{left: open?'0':'-110vh'}}>
                   <li>
                    <Link to ='/' onClick={handleClose}
                    style={{background: location.pathname==='/' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}
                    >Home
                    </Link>
                   </li>

                   <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>
                   <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>  <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>  <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>  <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>  <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>  <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>  <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>  <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>  <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>  <li>
                    <Link to ='/about' onClick={handleClose}
                    style={{background: location.pathname==='/about' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Resume
                    </Link>
                   </li>

                   <li>
                    <Link to ='/works' onClick={handleClose}
                    style={{background: location.pathname==='/works' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Works
                   </Link>
                   </li>

                   <li>
                    <Link to ='/contact-me' onClick={handleClose}
                    style={{background: location.pathname==='/contact-me' && 'linear-gradient(80deg,#DC3F89 0%,#903EDD 100%)'}}>
                        Contact me
                   </Link>
                   </li>
                  </ul>
               </div>
            </div> 
        </nav>
    )
}

export default Navbar
