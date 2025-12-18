import React from 'react'

const HeaderGo = ({ inView }) => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-10 right-10 z-[150] flex h-12 w-12 items-center justify-center transition-all duration-500 ease-in-out border border-accent/30 shadow-2xl group
        ${
          inView
            ? 'translate-y-24 opacity-0 pointer-events-none'
            : 'translate-y-0 opacity-100 pointer-events-auto'
        }
        bg-primary text-accent hover:bg-accent hover:text-primary active:scale-90`}
      aria-label="Yukarı Çık"
    >
      {/* BMW Tarzı İnce Ok ve Hover Animasyonu */}
      <i className="fas fa-chevron-up text-sm transition-transform duration-300 group-hover:-translate-y-1"></i>

      {/* Dekoratif Köşe Çizgileri - Sadece Hover Durumunda Belirir */}
      <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  )
}

export default HeaderGo
