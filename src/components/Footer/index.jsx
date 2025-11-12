import footerData from './footer-data'

const Footer = () => {
  const { logo, description, info, socialLinks, linkSections, copyright } = footerData

  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="auto-container">
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <a href="/">
                      <img
                        src={logo}
                        alt="footer logo"
                      />
                    </a>
                  </figure>
                  <div className="text">
                    <p>{description}</p>
                  </div>
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
                      <i className="fas fa-headphones"></i>
                      Telefon <a href={`tel:${info.phone}`}>{info.phone}</a>
                    </li>
                  </ul>

                  <ul className="social-links clearfix">
                    {socialLinks.map((social, index) => (
                      <li key={index}>
                        <a href={social.link}>
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {linkSections.map((section, index) => (
                <div
                  className={`col-lg-4 col-md-6 col-sm-12 footer-column`}
                  key={index}
                >
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h4>{section.title}</h4>
                    </div>
                    <div className="widget-content">
                      <ul className="list clearfix">
                        {section.links.map((item, idx) => (
                          <li key={idx}>
                            <a href={item.link}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="copyright">
            <p>
              &copy; {copyright.year} <a href={copyright.link}>{copyright.company}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
