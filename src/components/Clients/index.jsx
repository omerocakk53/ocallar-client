import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import ClientLogo from './ClientLogo'
import clientsData from './clients-data'

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="auto-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="clients-carousel"
        >
          {clientsData.map((client) => (
            <SwiperSlide key={client.id}>
              <ClientLogo client={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Clients
