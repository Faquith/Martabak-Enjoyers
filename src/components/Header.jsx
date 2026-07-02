import React from "react";

function Header() {
  return (
    <header id="beranda" className="header">
      <div
        className="header-banner"
        style={{
          backgroundImage:
            "linear-gradient(rgba(75,46,30,0.55), rgba(75,46,30,0.55)), url('/Gambar/martabak_header.jpg')",
        }}
      >
        <div className="header-content">
          <h1>Martabak Nusantara</h1>
          <p>Martabak Manis & Telur Favorit Keluarga</p>
          <a href="#produk-unggulan" className="btn-primary">
            Lihat Produk
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
