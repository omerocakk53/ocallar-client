import React from 'react'
import annualStatsData from './annual-stats-data'
import StatBox from './StatBox' // İsmi değiştirdik
import AnnualStatsImage from './AnnualStatsImage'

const AnnualStats = () => {
  const { content, image } = annualStatsData

  return (
    <section className="annual-stats">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Sol Taraf: Metin ve İstatistik Kutuları */}
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div id="content_block_two">
              <div className="content-box">
                <div className="sec-title left">
                  <h5>{content.subtitle}</h5>
                  <h2>{content.title}</h2>
                </div>
                <div className="text">
                  <p>{content.text}</p>
                </div>

                {/* İstatistik Kutuları Alanı */}
                <div
                  className="inner-box clearfix"
                  style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px' }}
                >
                  {content.stats.map((box, index) => (
                    <StatBox
                      key={index}
                      {...box}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Büyük Görsel */}
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <AnnualStatsImage
              src={image.src}
              pattern={image.pattern}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnnualStats
