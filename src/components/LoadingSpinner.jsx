import { useEffect, useState } from 'react'

const LoadingSpinner = ({ loadingCompleted }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [remove, setRemove] = useState(false)

  useEffect(() => {
    if (loadingCompleted) {
      // Sayfa yüklenince animasyonu başlat
      setIsAnimating(true)
      // Animasyon bittikten sonra bileşeni tamamen kaldır (yaklaşık 1s)
      const timer = setTimeout(() => setRemove(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [loadingCompleted])

  if (remove) return null

  return (
    <div className="fixed inset-0 z-[999] flex flex-col pointer-events-none">
      {/* Üst Katmanlar - Perde Efekti */}
      <div className="relative flex-1 flex flex-col">
        {/* Katman 1: En arkadaki ana gri katman */}
        <div
          className={`absolute inset-0 bg-primary transition-transform duration-[1000ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${isAnimating ? '-translate-y-full' : 'translate-y-0'}`}
          style={{ transitionDelay: '0ms' }}
        />

        {/* Katman 2: Ortadaki antik altın detay katmanı */}
        <div
          className={`absolute inset-0 bg-accent transition-transform duration-[1000ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${isAnimating ? '-translate-y-full' : 'translate-y-0'}`}
          style={{ transitionDelay: '100ms' }}
        />

        {/* Katman 3: En üstteki (ilk görünen) logo katmanı */}
        <div
          className={`absolute inset-0 bg-bg flex items-center justify-center transition-transform duration-[1000ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${isAnimating ? '-translate-y-full' : 'translate-y-0'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src="/uploads/images/logo.png"
              alt="Yükleniyor"
              className={`h-16 w-auto transition-all duration-700 ${isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
            />
            <div
              className={`h-[1px] bg-accent transition-all duration-1000 ${isAnimating ? 'w-0' : 'w-24'}`}
            />
          </div>
        </div>
      </div>

      {/* Atla/Kapat Butonu - Daha Modern ve Minimal */}
      {!isAnimating && (
        <button
          onClick={() => setIsAnimating(true)}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[1000] text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 hover:text-accent transition-colors pointer-events-auto"
        >
          GİRİŞİ ATLA
        </button>
      )}
    </div>
  )
}

export default LoadingSpinner
