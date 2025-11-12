import React from 'react'

const SocialLink = ({ href, iconClass }) => (
  <li>
    <a href={href}>
      <i className={iconClass}></i>
    </a>
  </li>
)

export default SocialLink
