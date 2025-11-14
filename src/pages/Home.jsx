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
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
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
      <LoadingSpinner loadingCompleted={true} />
      <Info />
      <Feature />
      <About />
      <Service />
      <Project />
      <AnnualStats />
      <Support />
      <Testimonial />
      <News />
      <Clients />
      <CTA />
    </>
  )
}
export default Home
