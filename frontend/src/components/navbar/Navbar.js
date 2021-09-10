
import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';

const Navbar =()=>{
    return(
        <div className='page-width'>
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
                    <Link to="/notifications">
                        <PeopleIcon />
                       <p>About</p>
                    </Link>
                </li>
                
             </nav>  
        </div>
    )
}

export default Navbar;