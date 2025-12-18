import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa6'

const NavItem = ({ href, label, subItems }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasSubItems = subItems && subItems.length > 0

  return (
    <li className="list-none border-b border-[#2b2b2b]/5">
      <div className="flex items-center justify-between">
        <a
          href={href}
          className="block py-5 text-[13px] font-black uppercase tracking-[0.2em] text-[#2b2b2b] hover:text-[#d4af37] transition-colors"
        >
          {label}
        </a>
        {hasSubItems && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex h-12 w-12 items-center justify-center text-[#2b2b2b] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#d4af37]' : ''}`}
          >
            <FaArrowDown className="text-xs" />
          </button>
        )}
      </div>

      {/* Akıcı Dropdown Alanı */}
      {hasSubItems && (
        <div
          className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <ul className="overflow-hidden bg-[#eaeded]/50 px-4">
            {subItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block py-3 text-[11px] font-bold uppercase tracking-widest text-[#676767] hover:text-[#d4af37]"
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
