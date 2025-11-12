import React from 'react'
import Logo from './Logo'
import SocialLink from '../SocialLink'
import NavItem from './NavItem'
import { navItems, socialLinks } from './header-data'

const Header = ({ ref, inView, onMobileNavClick }) => {
  return (
    <header
      ref={ref}
      className={`main-header style-one ${inView ? '' : 'fixed-header'}`}
    >
      <div className="header-top">
        <div className="auto-container">
          <div className="top-inner clearfix">
            <ul className="info top-left pull-left">
              <li>
                <i className="fas fa-map-marker-alt"></i>Adres
              </li>
              <li>
                <i className="fas fa-headphones"></i>Telefon{' '}
                <a href="tel:905555555555">0 555 555 55 55</a>
              </li>
            </ul>
            <div className="top-right pull-right">
              <ul className="social-links clearfix">
                {socialLinks.map((link, index) => (
                  <SocialLink
                    key={index}
                    href={link.href}
                    iconClass={link.iconClass}
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
              src="http://localhost:3000/uploads/images/logo.png"
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
                <div className="nav-btn nav-toggler navSidebar-button clearfix">
                  <i className="fas fa-align-right"></i>
                </div>
                <div className="btn-box">
                  <a
                    href="index.html"
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
              src="http://localhost:3000/uploads/images/small-logo.png"
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
