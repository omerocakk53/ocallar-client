import React from 'react'

const AnnualStatsImage = ({ src, pattern }) => {
  return (
    <div id="image_block_one">
      <div className="image-box">
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${pattern})` }}
        ></div>
        <figure className="image">
          <img
            src={src}
            alt="Annual Stats"
          />
        </figure>
      </div>
    </div>
  )
}

export default AnnualStatsImage
