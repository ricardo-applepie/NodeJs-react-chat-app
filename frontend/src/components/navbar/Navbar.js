
import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';

const Navbar =()=>{
    const { username } = useSelector((state) => state.userInfo)

    return(
        <div>
             <nav className='navbar'>
                <li className='navbar__item'>
                     <Link to="/">
                        <HomeIcon/>
                        <p>Home</p>
                     </Link>
                 </li>
                {/* <li className='navbar__item'>
                    <Link to="/inbox">
                        <NotificationsActiveIcon/>
                        <p>noifications</p>
                    </Link>
                </li> */}
                {/* <li className='navbar__item'>
                    <Link to="/friends">
                        <PeopleIcon/>
                        <p>Friends</p>
                    </Link>
                </li> */}
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
    
                <li onClick={() => {
                    alert("logged out")
                    localStorage.removeItem('usertoken'); }} className='navbar__item'>
                  
                        <PeopleIcon />
                        <p>logout</p>
                   
                </li>
                <li className='navbar__item'>
                    <Link to="/">
                        <Avatar alt={username}src="/static/images/avatar/1.jpg" />
                        <p>{username}</p>
                    </Link>
                </li>
             </nav>  
        </div>
    )
}

export default Navbar;