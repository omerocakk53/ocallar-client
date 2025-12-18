import React from 'react'
import SocialLink from '../SocialLink'
import renderIcon from '../../utils/renderIcon'

const AboutFeatureItem = ({ icon, title, description, link = '#' }) => {
  return (
    <div className="group flex flex-col space-y-3 p-6 transition-all duration-300 hover:bg-white/50">
      <div className="flex h-12 w-12 items-center justify-center bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
        {renderIcon(icon)}
      </div>
      <h4 className="text-sm font-black uppercase tracking-wider text-primary">
        <a
          href={link}
          className="hover:text-accent transition-colors"
        >
          {title}
        </a>
      </h4>
      <p className="text-xs leading-relaxed text-primary/60">{description}</p>
    </div>
  )
}

export default AboutFeatureItem
