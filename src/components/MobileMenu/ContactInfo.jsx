import React from 'react'

const ContactInfo = ({ info }) => (
  <footer className="main-footer">
    <div
      className="auto-container"
      style={{ paddingTop: '20px' }}
    >
      <div className="widget-section">
        <div className="footer-widget logo-widget">
          <ul className="info-list clearfix">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {info.address}
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              E-Posta <a href={`mailto:${info.email}`}>{info.email}</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              Telefon <a href={`tel:${info.phone}`}>{info.phone}</a>
            </li>
            <li>
              <i className="fas fa-fax"></i>
              Faks <a href={`tel:${info.faks}`}>{info.faks}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default ContactInfo
