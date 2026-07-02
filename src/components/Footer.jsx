import React from "react";

function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Martabak Nusantara</h3>
          <p>
            Martabak Manis & Telur Favorit Keluarga, dibuat dengan cinta sejak
            hari ini.
          </p>
        </div>
        <div className="footer-info">
          <p>Nama Mahasiswa: Muhammad Faqih</p>
          <p>NIM: 25.240.0021</p>
        </div>
      </div>
      <div className="footer-bawah">
        <p>&copy; {tahun} Toko Martabak Nusantara by @Muhammad Faqih.</p>
      </div>
    </footer>
  );
}

export default Footer;
