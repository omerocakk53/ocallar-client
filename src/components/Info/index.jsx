import React from 'react'
import InfoYearBox from './InfoYearBox'
import InfoText from './InfoText'
import infoData from './info-data'

const Info = () => {
  const { yearBox, text } = infoData

  return (
    <section className="info-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-7 col-md-12 col-sm-12 title-column">
            <InfoYearBox {...yearBox} />
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 text-column">
            <InfoText {...text} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
