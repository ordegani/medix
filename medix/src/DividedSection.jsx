import React from 'react'
import "./DividedSection.css"
const eyeIcon = require("./images/icon-eye.png")

export default function DividedSection() {
    return (
        <div className='lowerSection_container'>
            <div className='divided_container'>
                <div className='divided_container_box1'>
                    <img className="mini_menu_container_img" src={eyeIcon} al="image" />
                    <h6>Medical Eligibility</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequuntur, rerum excepturi fuga aperiam explicabo. Ab voluptatem architecto quae. Iure officia asperiores facilis, debitis autem temporibus itaque atque quae error.</p>
                </div>
                <div className='divided_container_box2'>
                    <img className="mini_menu_container_img" src={eyeIcon} al="image" />
                    <h6>Medical Eligibility</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam corrupti ad, beatae minima quia distinctio dicta officiis placeat assumenda? Tempore debitis inventore eum quasi et ut voluptas ipsa, modi eos.</p>
                </div>
                <div className='divided_container_box3'>
                    <img className="mini_menu_container_img" src={eyeIcon} al="image" />
                    <h6>Medical Eligibility</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti cupiditate eveniet iste modi odit, officiis consequuntur ratione? Repellendus harum libero doloribus dignissimos quibusdam voluptatum mollitia corrupti reprehenderit praesentium eius.</p>
                </div>
                <div className='divided_container_box4'>
                    <img className="mini_menu_container_img" src={eyeIcon} al="image" />
                    <h6>Medical Eligibility</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum labore itaque porro a cumque obcaecati, nihil provident, ullam temporibus doloremque veniam vitae architecto. Recusandae dolor sint maiores non nihil.</p>
                </div>
            </div>
        </div>
    )
}
