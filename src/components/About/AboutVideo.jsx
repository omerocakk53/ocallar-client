import React from 'react'

const AboutVideo = ({ image, buttonBg, videoUrl }) => {
  return (
    <div className="video-inner">
      <figure className="image-box">
        <img
          src={image}
          alt="About section"
        />
      </figure>
      <div className="video-btn">
        <a
          href={videoUrl}
          className="lightbox-image"
          data-caption=""
          style={{ backgroundImage: `url(${buttonBg})` }}
        >
          <i className="fas fa-play"></i>
        </a>
      </div>
    </div>
  )
}

export default AboutVideo
