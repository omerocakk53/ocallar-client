import React from 'react'

const StatBox = ({ color, value, title, icon }) => {
  return (
    <div
      className="single-progress-box"
      style={{ width: '33%', float: 'left', textAlign: 'center' }}
    >
      <div className="box">
        <div
          className="icon-box"
          style={{
            fontSize: '60px',
            color: color,
            marginBottom: '15px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i className={icon}></i>
        </div>
        <div
          className="count-outer"
          style={{
            fontSize: '140%',
            fontWeight: '800',
            color: '#222',
            lineHeight: '1',
            marginBottom: '10px',
          }}
        >
          {value}
        </div>
        <h5 style={{ fontSize: '16px', fontWeight: '600', margin: '0', color: '#666' }}>{title}</h5>
      </div>
    </div>
  )
}

export default StatBox
