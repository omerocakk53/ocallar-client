import React from 'react'

const InfoYearBox = ({ image, years, companyName, title }) => {
  return (
    <div className="title-inner">
      <div className="year-box">
        <figure className="image-box">
          <img
            src={image}
            alt="Year Icon"
          />
        </figure>
        <h2>{years}</h2>
        <h3>{companyName}</h3>
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default InfoYearBox
