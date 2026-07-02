import React from 'react'

function Maps() {
  return (
    <section id="lokasi" className="maps-section">
      <h2 className="section-title">Lokasi Toko Kami</h2>
      <p className="section-subtitle">Kunjungi toko kami di Pekalongan, Jawa Tengah, Indonesia.</p>
      <div className="maps-wrapper">
        <iframe
          title="Lokasi Toko Martabak Nusantara"
          src="https://www.google.com/maps?q=Pekalongan,%20Jawa%20Tengah,%20Indonesia&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default Maps
