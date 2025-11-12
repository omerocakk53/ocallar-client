import React from 'react'

const InfoText = ({ content, link, linkText }) => {
  return (
    <div className="text">
      <p>{content}</p>
      <a href={link}>
        <i className="fas fa-arrow-right"></i>
        <span>{linkText}</span>
      </a>
    </div>
  )
}

export default InfoText
