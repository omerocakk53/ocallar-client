// components/About/about-data.js

const aboutData = {
  video: {
    image: '/uploads/images/resource/about-1.jpg',
    buttonBg: '/uploads/images/resource/btn-bg.png',
    videoUrl: '#', // ya da örnek: 'https://www.youtube.com/watch?v=abc123'
  },
  content: {
    subtitle: 'Öcallar Petrol',
    title: 'Ürün Tanıtımı',
    text: `Ürün tanıtım yazısı. Ürün tanıtım yazısı. Ürün tanıtım yazısı. 
           Ürün tanıtım yazısı. Ürün tanıtım yazısı. Ürün tanıtım yazısı. 
           Ürün tanıtım yazısı.`,
    features: [
      {
        icon: 'flaticon-computer-1',
        title: 'Özellik 1',
        description: 'Açıklama',
        link: 'index.html',
      },
      {
        icon: 'flaticon-browser-1',
        title: 'Özellik 2',
        description: 'Açıklama',
        link: 'index.html',
      },
    ],
  },
}

export default aboutData
