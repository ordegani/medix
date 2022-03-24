import React from 'react'
import "./DividedSection.css"
const eyeIcon = require("./images/icon-eye.png")

export default function DividedSection() {
  return (
      <div className='lowerSection_container'>
    <div className='divided_container'>
        <div className='divided_container_box1'>
        <img className="mini_menu_container_img" src={eyeIcon} al="image"/>
        <h6>Medical Eligibility</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facere sint, qui esse libero dolorum officia, iusto porro fuga officiis, impedit cupiditate perspiciatis dolorem eligendi nisi dignissimos rem ex distinctio.</p>
        </div>
        <div className='divided_container_box2'>
        <img className="mini_menu_container_img" src={eyeIcon} al="image"/>
        <h6>Medical Eligibility</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae a eum ipsum officiis recusandae itaque ea, fuga, odio vero aspernatur nisi perspiciatis dolores delectus nihil voluptate deleniti libero debitis.</p>
        </div>
        <div className='divided_container_box3'>
        <img className="mini_menu_container_img" src={eyeIcon} al="image"/>
        <h6>Medical Eligibility</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam sint, tenetur minima optio fuga eius facilis laudantium minus molestiae dolorem magni vitae ducimus, veniam praesentium reprehenderit, possimus quos. Rem.</p>
        </div>
        <div className='divided_container_box4'>
        <img className="mini_menu_container_img" src={eyeIcon} al="image"/>
        <h6>Medical Eligibility</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rerum, aliquam vel ipsum veritatis corporis placeat at est harum, quas accusamus tenetur sed incidunt necessitatibus deserunt impedit veniam ratione. Laboriosam.</p>
        </div>
    </div>
    </div>
  )
}
