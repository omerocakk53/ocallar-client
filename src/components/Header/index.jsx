import React from 'react'
import Logo from './Logo'
import SocialLink from '../SocialLink'
import NavItem from './NavItem'
import { navItems } from './header-data'
import { useSocial } from '@/admin/hooks/web-management/useSocial'
import footerData from '../Footer/footer-data'

const Header = ({ ref, inView, onMobileNavClick }) => {
  const { social } = useSocial()
  const { info } = footerData
  return (
    <header
      ref={ref}
      className={`main-header style-one ${inView ? '' : 'fixed-header'}`}
    >
      <div className="header-top">
        <div
          className="auto-container"
          style={{ maxWidth: 'none' }}
        >
          <div className="top-inner clearfix">
            <ul className="info top-left pull-left">
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
            <div className="top-right pull-right">
              <ul className="social-links clearfix">
                {social.map((item, index) => (
                  <SocialLink
                    key={index}
                    href={item.socialLink}
                    icon={item.socialIcon}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-lower">
        <div className="auto-container">
          <div className="outer-box clearfix">
            <Logo
              src="/uploads/images/logo.png"
              alt="Ana Logo"
            />
            <div className="menu-area pull-right">
              <div
                onClick={onMobileNavClick}
                className="mobile-nav-toggler"
              >
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    {navItems.map((item, index) => (
                      <NavItem
                        key={index}
                        href={item.href}
                        label={item.label}
                        subItems={item.subItems}
                      />
                    ))}
                  </ul>
                </div>
              </nav>
              <div className="menu-right-content clearfix">
                <div className="btn-box">
                  <a
                    href="#"
                    className="theme-btn style-one"
                  >
                    TEKLİF AL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header">
        <div className="auto-container">
          <div className="outer-box clearfix">
            <Logo
              src="/uploads/images/logo.png"
              alt="Sticky Logo"
            />
            <div className="menu-area pull-right">
              <nav className="main-menu clearfix">
                <ul className="navigation clearfix">
                  {navItems.map((item, index) => (
                    <NavItem
                      key={index}
                      href={item.href}
                      label={item.label}
                      subItems={item.subItems}
                    />
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
