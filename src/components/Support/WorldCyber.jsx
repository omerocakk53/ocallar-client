import React from 'react'

const WorldCyber = ({ subtitle, pattern }) => {
  return (
    <section className="world-cyber bg-color-1">
      <div
        className="pattern-layer"
        style={{ backgroundImage: `url(${pattern})` }}
      ></div>
      <div className="auto-container">
        <div className="sec-title centred">
          <h5>{subtitle}</h5>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  )
}

export default WorldCyber
