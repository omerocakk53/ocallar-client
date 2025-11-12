import ctaData from './cta-data'

const CTA = () => {
  return (
    <section className="cta-section">
      <div
        className="pattern-layer"
        style={{ backgroundImage: `url(${ctaData.pattern})` }}
      ></div>

      <div className="auto-container">
        <div className="inner-container clearfix">
          <div className="title pull-left">
            <h2>{ctaData.title}</h2>
          </div>

          <div className="btn-box pull-right">
            <a href={ctaData.buttonLink}>{ctaData.buttonText}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
