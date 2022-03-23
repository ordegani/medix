import React from 'react'
import "./Header.css"
const logo = require("./images/logo.png")
const phoneIcon = require("./images/phone-icon-mob.png")
const loginIcon = require("./images/login-icon.png")

export default function Header() {
    return (
        <div className='header_container'>
                <img className="logo" src={logo} alt="image"></img>
            <div className='mini_menu_container'>
                <div className='phoneNumber'><img className="mini_menu_container_img" src={phoneIcon} />1230703620(0)+44</div>
                <div className='login'><img className="mini_menu_container_img" src={loginIcon} al="image"/>Login</div>
            </div>
        </div>
    )
}
