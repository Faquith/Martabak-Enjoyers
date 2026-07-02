import React, { useState } from 'react'
import { FaShoppingCart, FaMoon, FaSun, FaBars, FaTimes, FaSearch } from 'react-icons/fa'

function Navbar({ jumlahKeranjang, darkMode, toggleDarkMode, searchTerm, setSearchTerm }) {
  const [menuTerbuka, setMenuTerbuka] = useState(false)

  const menuItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Best Seller', href: '#best-seller' },
    { label: 'Produk Unggulan', href: '#produk-unggulan' },
    { label: 'Keranjang', href: '#keranjang' },
    { label: 'Lokasi', href: '#lokasi' },
    { label: 'Kontak', href: '#kontak' },
  ]

  const handleClick = () => setMenuTerbuka(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#beranda" className="navbar-logo">
          🥞 Martabak <span>Nusantara</span>
        </a>

        <div className="navbar-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Cari produk martabak..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuTerbuka(!menuTerbuka)}
          aria-label="Buka menu"
        >
          {menuTerbuka ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-menu ${menuTerbuka ? 'aktif' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleClick}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#keranjang" className="navbar-cart" onClick={handleClick}>
              <FaShoppingCart />
              {jumlahKeranjang > 0 && <span className="cart-badge">{jumlahKeranjang}</span>}
            </a>
          </li>
          <li>
            <button className="darkmode-toggle" onClick={toggleDarkMode} aria-label="Ganti mode gelap">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
