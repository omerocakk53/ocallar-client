import React from 'react'

const NavItem = ({ href, label, subItems }) => {
  const hasSubItems = subItems && subItems.length > 0
  return (
    <li className={hasSubItems ? 'dropdown' : ''}>
      <a href={href}>{label}</a>
      {hasSubItems && (
        <ul>
          {subItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavItem
