const aboutData = {
  video: {
    // Buraya video kapağı için güzel bir görsel (Tır/Araba/Varil) koymalısın
    image:
      'https://www.castrol.com/content/dam/castrol/country-sites-new/tr_tr/turkey/home/images/home/magnatec-carousel-banner.jpg',
    // Youtube video ID'si (Örn: watch?v=Ycjvu86MAg8 -> ID: Ycjvu86MAg8)
    videoId: 'E50IUjXg8yA',
  },
  content: {
    subtitle: 'MÜKEMMEL PERFORMANS',
    title: 'Dünyanın Tercihi Castrol Ürünleri',
    text: `Öcallar Petrol güvencesiyle sunduğumuz Castrol ürün ailesi, motorunuzun sınırlarını zorlar. Binek araçlardan ağır vasıtalara, endüstriyel tesislerden denizciliğe kadar her alanda en yüksek verimlilik ve koruma sağlayan teknolojiyi sizinle buluşturuyoruz.`,

    // Ürün Grupları Listesi
    features: [
      {
        icon: 'fas fa-car-side', // FontAwesome ikonları
        title: 'Binek Araç Yağları',
        description: 'Castrol EDGE ve Magnatec ile motorunuz için maksimum koruma.',
        link: '/urunler/binek',
      },
      {
        icon: 'fas fa-truck-moving',
        title: 'Ticari Araç Yağları',
        description: 'VECTON serisi ile filonuzun ömrünü uzatın, maliyeti düşürün.',
        link: '/urunler/ticari',
      },
      {
        icon: 'fas fa-industry',
        title: 'Endüstriyel Yağlar',
        description: 'Fabrika ve iş makineleriniz için yüksek performanslı çözümler.',
        link: '/urunler/endustriyel',
      },
    ],
  },
}

export default aboutData
