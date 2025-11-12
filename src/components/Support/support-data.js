const supportData = {
  worldCyber: {
    subtitle: 'Öcallar Petrol',
    pattern: 'http://localhost:3000/uploads/images/shape/shape-2.png',
  },
  supportSection: {
    titleBox: {
      subtitle: 'Öcallar Petrol',
      title: 'Bizimle iletişime geçin',
      text: 'Aşağıdaki formu doldurarak bizlere ulaşabilirsiniz.',
    },
    formFields: [
      { name: 'name', type: 'text', placeholder: 'Adınız Soyadınız', required: true },
      { name: 'email', type: 'email', placeholder: 'E-Posta Adresiniz', required: true },
      { name: 'phone', type: 'text', placeholder: 'Telefon', required: true },
      { name: 'message', type: 'textarea', placeholder: 'Mesajınız' },
    ],
    submitButton: { text: 'Mesajı Gönder', className: 'theme-btn style-one' },
    info: {
      image: 'http://localhost:3000/uploads/images/resource/info-1.jpg',
      logo: 'http://localhost:3000/uploads/images/icons/info-logo.png',
      phone: '0 555 555 55 55',
      email: 'iletisim@ocallarpetrol.com',
      company: 'Öcallar Petrol',
      links: [{ text: 'Öcallar Petrol', href: 'index.html' }],
    },
  },
}

export default supportData
