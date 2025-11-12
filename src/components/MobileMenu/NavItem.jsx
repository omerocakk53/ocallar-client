import React, { useState, useEffect, useRef } from 'react'

const NavItem = ({ href, label, subItems }) => {
  const hasSubItems = subItems && subItems.length > 0
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const subMenuRef = useRef(null)
  const [allowTransition, setAllowTransition] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setAllowTransition(true)
    }, 10)
    return () => clearTimeout(timer)
  }, [])

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen)
  }
  const contentHeight = subMenuRef.current ? `${subMenuRef.current.scrollHeight}px` : '0px'
  const subMenuStyles = {
    display: 'block',
    overflow: 'hidden',
    transition: allowTransition ? 'max-height 0.4s ease-out' : 'none',
    maxHeight: isSubMenuOpen ? contentHeight : '0px',
  }

  return (
    <li className={hasSubItems ? 'dropdown' : ''}>
      <a href={href}>{label}</a>
      {hasSubItems && (
        <ul
          style={subMenuStyles}
          ref={subMenuRef}
        >
          {subItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
      {hasSubItems && (
        <div
          onClick={toggleSubMenu}
          className={`dropdown-btn ${isSubMenuOpen ? 'open' : ''}`}
        >
          <span className="fas fa-angle-down"></span>
        </div>
      )}
    </li>
  )
}

export default NavItem
