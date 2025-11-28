const supportData = {
  // Eski WorldCyber yerine genel başlık verisi
  header: {
    title: 'İletişim & Çözüm Merkezi',
    subtitle: 'ÖCALLAR PETROL',
    text: 'Sorularınız, bayilik talepleriniz veya ürün siparişleriniz için formu doldurabilir veya doğrudan bize ulaşabilirsiniz.',
  },
  supportSection: {
    formFields: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Adınız Soyadınız',
        required: true,
        width: 'half',
      },
      {
        name: 'company',
        type: 'text',
        placeholder: 'Firma / Kurum Adı',
        required: false,
        width: 'half',
      }, // Yeni Alan
      {
        name: 'email',
        type: 'email',
        placeholder: 'E-Posta Adresiniz',
        required: true,
        width: 'half',
      },
      {
        name: 'phone',
        type: 'text',
        placeholder: 'Telefon Numaranız',
        required: true,
        width: 'half',
      },
      {
        name: 'subject',
        type: 'text',
        placeholder: 'Konu (Örn: Bayilik, Sipariş)',
        required: true,
        width: 'full',
      },
      { name: 'message', type: 'textarea', placeholder: 'Mesajınız...', width: 'full' },
    ],
    // KVKK Metni
    kvkkText:
      'Kişisel verilerimin KVKK kapsamında işlenmesini ve tarafımla iletişime geçilmesini kabul ediyorum.',
    kvkkLink: '/kvkk-aydinlatma-metni', // Link varsa buraya
    submitButton: { text: 'Talebi Gönder', className: 'theme-btn' },

    // Sağ taraftaki Bilgi Kartı
    info: {
      image: '/uploads/images/resource/info-1.jpg', // Buraya ofis/depo resmi koyulmalı
      title: 'Merkez Ofis & Depo',
      address: 'Devrek Sanayi Sitesi, Zonguldak', // Örnek adres
      email: 'info@ocallarpetrol.com',
      phone: '+90 (372) 000 00 00',
      mapsLink: 'https://goo.gl/maps/...', // Google Maps linki
    },
  },
}

export default supportData
