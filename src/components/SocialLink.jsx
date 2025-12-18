import React from 'react'
import renderIcon from '../utils/renderIcon'

const SocialLink = ({ href, iconClass, icon }) => (
  <li>
    <a href={href}>
      {icon && renderIcon(icon)}
      <i className={iconClass}></i>
    </a>
  </li>
)

export default SocialLink
