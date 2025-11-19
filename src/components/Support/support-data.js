const supportData = {
  worldCyber: {
    subtitle: 'Öcallar Petrol',
    pattern: '/uploads/images/shape/shape-2.png',
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
      image: '/uploads/images/resource/info-1.jpg',
      logo: '/uploads/images/icons/info-logo.png',
      company: 'Öcallar Petrol',
      links: [{ text: 'Öcallar Petrol', href: '#' }],
    },
  },
}

export default supportData
