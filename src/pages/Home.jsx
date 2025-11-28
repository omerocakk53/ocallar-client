import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import About from '@/components/About'
import AnnualStats from '@/components/AnnualStats'
import Clients from '@/components/Clients'
import CTA from '@/components/CTA'
import Feature from '@/components/Feature'
import Info from '@/components/Info'
import LoadingSpinner from '@/components/LoadingSpinner'
import News from '@/components/News'
import Project from '@/components/Project'
import Service from '@/components/Service'
import Support from '@/components/Support'
import Testimonial from '@/components/Testimonial'

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{'Ana Sayfa | Öcallar'}</title>
          <meta
            name="description"
            content="Öcallar ana sayfası - Son haberler, duyurular ve hızlı erişim"
          />
          <meta
            property="og:title"
            content="Ana Sayfa"
          />
          <meta
            property="og:description"
            content="Öcallar ana sayfası - Son haberler, duyurular ve hızlı erişim"
          />
        </Helmet>
      </HelmetProvider>
      <LoadingSpinner loadingCompleted={true} />
      <Info />
      <AnnualStats />
      <About />
      {/* Araya görsel bir ayrım (Divider) koymak istersen buraya eklenebilir */}
      <Service />
      <Project />
      <Support />
      {/* Support bölümü genellikle farklı bir arka plan rengine sahip olur, dikkat çeker */}
      <Testimonial />
      <News />
      <CTA />
    </>
  )
}
export default Home
