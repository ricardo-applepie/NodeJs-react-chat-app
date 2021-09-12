
import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HowToRegIcon from '@material-ui/icons/HowToReg';
const Navbar =()=>{
    return(
        <div>
             <nav className='navbar'>
                <li className='navbar__item'>
                     <Link to="/">
                        <HomeIcon/>
                        <p>Home</p>
                     </Link>
                 </li>
                <li className='navbar__item'>
                    <Link to="/inbox">
                        <NotificationsActiveIcon/>
                        <p>noifications</p>
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to="/friends">
                        <PeopleIcon/>
                        <p>Friends</p>
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to="/login">
                        <LockOpenIcon />
                        <p>login</p>
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to="/signup">
                        <HowToRegIcon />
                        <p>signup</p>
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to="/about">
                        <PeopleIcon />
                       <p>About</p>
                    </Link>
                </li>
                <li onClick={() => {
                    localStorage.removeItem('usertoken'); }} className='navbar__item'>
                  
                        <PeopleIcon />
                        <p>logout</p>
                   
                </li>
             </nav>  
        </div>
    )
}

export default Navbar;