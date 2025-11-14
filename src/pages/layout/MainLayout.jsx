import { Outlet } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'
import Footer from '@/components/Footer'
// 1. Oluşturduğumuz modüler hook'u import ediyoruz.
import useDynamicStylesheet from '@/hooks/useDynamicStylesheet' // (Yolu doğrulayın)
// 2. CSS dosyasının yolunu Vite'ın `import.meta.url` özelliği ile doğru şekilde çözümlüyoruz.
// Bu, build (derleme) sırasında bile dosya yolunun doğru bulunmasını sağlar.
const STYLESHEET_URL = new URL('@/style/index.css', import.meta.url).href
const STYLESHEET_ID = 'ocallar-sablon-css' // Bu ID, hook'un hangi CSS'i yöneteceğini bilmesi için kritik.
const MainLayout = () => {
  // 3. Artık tüm karmaşık mantık bu tek satırlık hook çağrısında:
  // "Bu bileşen render edildiği sürece, bu CSS dosyasının yüklü olduğundan emin ol."
  useDynamicStylesheet(STYLESHEET_URL, STYLESHEET_ID)
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
