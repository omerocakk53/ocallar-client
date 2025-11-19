import React from 'react'
import { HelpCircle } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { BookDashed } from 'lucide-react'

const renderIcon = (iconName) => {
  const IconComponent = LucideIcons[iconName]
  if (IconComponent) {
    return <IconComponent style={{ width: '18px', height: '18px', strokeWidth: '2.3px' }} />
  }
  return <HelpCircle className="w-5 h-5 text-muted-foreground" />
}

const SocialLink = ({ href, iconClass, icon }) => (
  <li>
    <a href={href}>
      {icon && renderIcon(icon)}
      <i className={iconClass}></i>
    </a>
  </li>
)

export default SocialLink
