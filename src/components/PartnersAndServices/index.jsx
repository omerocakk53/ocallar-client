import React from 'react'

const partners = [
  {
    name: 'Castrol',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Castrol_logo_2023.svg/250px-Castrol_logo_2023.svg.png',
    desc: 'Ana Distribütör',
  },
  {
    name: 'BP',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/e/e7/BP_Logo.svg/250px-BP_Logo.svg.png',
    desc: 'Resmi İş Ortağı',
  },
]

const services = [
  {
    title: 'Madeni Yağ Çözümleri',
    desc: 'Binek araçlardan endüstriyel tesislere kadar geniş ürün yelpazesi ile Castrol kalitesini ulaştırıyoruz.',
    image:
      'https://www.castrol.com/content/dam/castrol/master-site/en/global-ia/home/images/products/reignite-meksa/our-brands/edge-card.jpg.img.500.medium.jpg',
    category: 'OTOMOTİV & ENDÜSTRİ',
  },
  {
    title: 'Ağır Vasıta Yedek Parça',
    desc: 'Güçlü stok altyapımızla ağır vasıta grubunda dünya standartlarında yedek parça tedariği sağlıyoruz.',
    image:
      'https://www.castrol.com/content/dam/castrol/master-site/en/global-ia/home/images/industries/automotive-engine-and-transmission-promo.jpg.img.500.medium.jpg',
    category: 'LOJİSTİK & TİCARİ',
  },
  {
    title: 'Lojistik ve Dağıtım',
    desc: 'Zonguldak ve Düzce merkezli depolarımızla Batı Karadeniz’in tamamına kesintisiz sevkiyat yapıyoruz.',
    image:
      'https://www.castrol.com/content/dam/castrol/master-site/en/global-ia/home/images/home/commercial-vehicles-promo.jpg.img.500.medium.jpg',
    category: 'OPERASYONEL GÜÇ',
  },
]

const PartnersAndServices = () => {
  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="container mx-auto px-8">
        {/* Distribütörlük Alanı - BMW Tarzı Minimalist Giriş */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24 border-b border-primary/10 pb-16">
          <div className="max-w-2xl">
            <span className="text-accent text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">
              GÜCÜMÜZÜN KAYNAĞI
            </span>
            <h2 className="text-primary text-4xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
              Dünya Devlerinin <br /> <span className="text-accent">Bölgedeki Yüzüyüz.</span>
            </h2>
          </div>
          <div className="flex gap-12 items-center filter grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((brand, i) => (
              <div
                key={i}
                className="text-center group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 w-28 object-contain mb-4 transform group-hover:scale-110 transition-transform"
                />
                <p className="text-[10px] font-bold text-text-light tracking-widest uppercase">
                  {brand.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hizmetler Alanı - Asimetrik Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-primary aspect-[4/5] ${index === 1 ? 'lg:-translate-y-12' : ''}`}
            >
              {/* Arka Plan Görseli */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* İçerik Katmanı */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-primary via-transparent to-transparent">
                <span className="text-accent text-[10px] font-black tracking-[0.3em] mb-4">
                  {service.category}
                </span>
                <h3 className="text-bg text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {service.desc}
                </p>

                {/* İnce Altın Çizgi Animasyonu */}
                <div className="w-0 h-[2px] bg-accent mt-6 group-hover:w-full transition-all duration-500" />
              </div>

              {/* Köşe Detayı */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fas fa-arrow-right text-accent -rotate-45 text-xl"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Bilgi & CTA */}
        <div className="mt-24 text-center">
          <p className="text-primary/60 text-sm font-medium mb-8">
            İhtiyacınıza özel çözümler ve toplu alım avantajları için bizimle iletişime geçin.
          </p>
          <a
            href="/iletisim"
            className="inline-block border-b-2 border-accent pb-2 text-primary font-black text-xs uppercase tracking-[0.3em] hover:text-accent transition-colors"
          >
            TÜM HİZMETLERİMİZİ GÖRÜN
          </a>
        </div>
      </div>
    </section>
  )
}

export default PartnersAndServices
