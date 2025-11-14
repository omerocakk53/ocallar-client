import { useEffect } from 'react'
/**
 * Dinamik olarak <head> etiketine bir stil sayfası (<link>) ekler
 * ve bileşen kaldırıldığında (unmount) bu stil sayfasını geri siler.
 * * @param {string} href - Yüklenecek CSS dosyasının tam yolu (URL).
 * @param {string} id - Stil etiketine verilecek benzersiz ID (tekrarlamayı önler).
 */
function useDynamicStylesheet(href, id) {
  useEffect(() => {
    // 1. KONTROL: Eğer bu ID'ye sahip bir <link> zaten varsa, tekrar ekleme.
    if (document.getElementById(id)) {
      return
    }
    // 2. OLUŞTUR: Yeni <link> elementini oluştur.
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = href
    link.id = id
    // 3. EKLE: Oluşturulan elementi <head> içine ekle.
    document.head.appendChild(link)
    // 4. TEMİZLİK FONKSİYONU (ÇOK ÖNEMLİ):
    // Bu bileşen (MainLayout) ekrandan kaldırıldığında (unmount) çalışır.
    return () => {
      const existing = document.getElementById(id)
      if (existing) {
        existing.remove() // CSS dosyasını DOM'dan kaldır.
      }
    }
  }, [href, id]) // href veya id değişirse bu efekti tekrar çalıştır.
}

export default useDynamicStylesheet
