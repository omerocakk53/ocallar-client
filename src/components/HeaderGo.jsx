import React from 'react'

const HeaderGo = ({ inView }) => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`scroll-top scroll-to-target ${inView ? '' : 'open'}`}
    >
      <span className="fa fa-arrow-up"></span>
    </button>
  )
}

export default HeaderGo
