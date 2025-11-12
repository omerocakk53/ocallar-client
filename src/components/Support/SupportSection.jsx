import React from 'react'
import SupportForm from './SupportForm'
import SupportInfo from './SupportInfo'

const SupportSection = ({ titleBox, formFields, submitButton, info }) => {
  return (
    <section className="support-section">
      <div className="auto-container">
        <div className="inner-container">
          <div className="row clearfix">
            <div className="col-lg-7 col-md-12 col-sm-12 inner-column">
              <div className="inner-box">
                <div className="sec-title light left">
                  <h5>{titleBox.subtitle}</h5>
                  <h2>{titleBox.title}</h2>
                  <p>{titleBox.text}</p>
                </div>
                <SupportForm
                  fields={formFields}
                  submitButton={submitButton}
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 info-column">
              <SupportInfo {...info} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
