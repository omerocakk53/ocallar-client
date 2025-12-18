import React, { useState } from 'react'

const NavItem = ({ href, label, subItems }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li
      className="relative list-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={href}
        className="group flex items-center gap-2 px-4 py-8 text-[12px] font-extrabold uppercase tracking-[0.15em] text-[#2b2b2b] transition-colors hover:text-[#d4af37]"
      >
        {label}
        {subItems && (
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
        {/* BMW Tarzı Alt Çizgi - Antik Altın */}
        <span className="absolute bottom-7 left-4 right-4 h-[1.5px] scale-x-0 bg-[#d4af37] transition-transform duration-500 group-hover:scale-x-100" />
      </a>

      {subItems && (
        <div
          className={`absolute left-0 top-full w-64 bg-[#f4f4f2] shadow-2xl transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}
        >
          <ul className="py-2 border-t-2 border-[#d4af37]">
            {subItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#0f2c28] hover:bg-[#eaeded] hover:text-[#d4af37] transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

export default NavItem
