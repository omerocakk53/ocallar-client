import React from 'react'

const SlideContent = ({ slide }) => {
  return (
    <div className={slide.contentClass}>
      {slide.subtitleList ? (
        <ul className="list-item clearfix">
          {slide.subtitleList.map((item, i) => (
            <li key={i}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      ) : (
        <h5>{slide.subtitle}</h5>
      )}

      <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />

      <div className="btn-box">
        {slide.buttons.map(({ text, href, className }, btnIndex) => (
          <a
            href={href}
            className={className}
            key={btnIndex}
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SlideContent
