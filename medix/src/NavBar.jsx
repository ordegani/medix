import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"

const Navbar = () => {
    return (
        <div className='navBar_container'>
            <ul className="navbarUl">
                <li>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/">Not Just Eligibility</Link>
                    <Link className='link' to="/">The components</Link>
                    <Link className='link' to="/">Why MedixCorp?</Link>
                    <Link className='link' to="/">Contect Us</Link>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;