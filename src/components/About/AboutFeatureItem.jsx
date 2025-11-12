import React from 'react'

const AboutFeatureItem = ({ icon, title, description, link }) => {
  return (
    <div className="single-item">
      <div className="icon-box">
        <span className="bg-box"></span>
        <i className={icon}></i>
      </div>
      <h4>
        <a href={link}>{title}</a>
      </h4>
      <p>{description}</p>
    </div>
  )
}

export default AboutFeatureItem
