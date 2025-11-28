import React from 'react'

const AboutVideo = ({ image, onOpenModal }) => {
  return (
    <div className="video-wrapper">
      <div className="video-inner">
        <img
          src={image}
          alt="Tanıtım Videosu"
        />

        <div
          className="play-btn-box"
          onClick={onOpenModal}
        >
          <div className="play-btn-inner">
            <i className="fas fa-play"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutVideo
