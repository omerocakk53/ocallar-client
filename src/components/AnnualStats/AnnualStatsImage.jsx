import React from 'react'

const AnnualStatsImage = ({ src, pattern }) => {
  return (
    <div id="image_block_one">
      <div
        className="image-box"
        style={{ position: 'relative' }}
      >
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${pattern})` }}
        ></div>
        <figure
          className="image"
          style={{ margin: 0, height: '100%' }}
        >
          <img
            src={src}
            alt="Türkiye İstatistikleri"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              objectFit: 'contain',
            }}
          />
        </figure>
      </div>
    </div>
  )
}

export default AnnualStatsImage
