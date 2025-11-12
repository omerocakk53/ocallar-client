import About from '@/components/About'
import AnnualStats from '@/components/AnnualStats'
import Clients from '@/components/Clients'
import CTA from '@/components/CTA'
import Feature from '@/components/Feature'
import Info from '@/components/Info'
import News from '@/components/News'
import Project from '@/components/Project'
import Service from '@/components/Service'
import Support from '@/components/Support'
import Testimonial from '@/components/Testimonial'

const Home = () => {
  return (
    <>
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
