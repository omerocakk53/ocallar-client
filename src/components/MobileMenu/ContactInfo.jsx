import React from 'react'

const ContactInfo = ({ title, items }) => (
  <div className="contact-info">
    <h4>{title}</h4>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {/* Eğer item.href varsa link oluştur, yoksa düz metin yaz */}
          {item.href ? <a href={item.href}>{item.text}</a> : item.text}
        </li>
      ))}
    </ul>
  </div>
)

export default ContactInfo
