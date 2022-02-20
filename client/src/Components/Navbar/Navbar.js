import React from 'react'
import "../Navbar/Navbar.css"
import { FiHome } from 'react-icons/fi';
import {FaWpexplorer} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {IoNotificationsOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
            <h3 className="name">DO ME FAVOUR</h3>

            <Link to='/'>
             
            <div className="nav_items">
                <FiHome style={{"fontSize":"xx-large"}}/>
                <h5>Home</h5>
            </div>
            </Link>

            <div className="nav_items">
                <FaWpexplorer style={{"fontSize":"xx-large"}}/>
                <h5>Explore</h5>
            </div>

            <Link to='/profile'>
             
            <div className="nav_items">
                <CgProfile style={{"fontSize":"xx-large"}}/>
                <h5>Profile</h5>
            </div>
             </Link>

            <div className="nav_items">
                <IoNotificationsOutline style={{"fontSize":"xx-large"}}/>
                <h5>Notifications</h5>
            </div>
    </div>
  )
}

export default Navbar