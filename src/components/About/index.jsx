import React from 'react'
import AboutVideo from './AboutVideo'
import AboutContent from './AboutContent'
import aboutData from './about-data'

const About = () => {
  const { video, content } = aboutData

  return (
    <section className="about-section bg-color-1">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 video-column">
            <AboutVideo
              image={video.image}
              buttonBg={video.buttonBg}
              videoUrl={video.videoUrl}
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <AboutContent
              subtitle={content.subtitle}
              title={content.title}
              text={content.text}
              features={content.features}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
