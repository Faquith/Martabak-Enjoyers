import React from "react";

function Maps() {
  return (
    <section id="lokasi" className="maps-section">
      <h2 className="section-title">Lokasi Toko Kami</h2>
      <p className="section-subtitle">
        Kunjungi toko kami di Pekalongan, Jawa Tengah, Indonesia.
      </p>
      <div className="maps-wrapper">
        <iframe
          title="Lokasi Toko Martabak Nusantara"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.5763556484606!2d109.68039742570234!3d-6.8640151985617015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTEnNTAuMSJTIDEwOcKwNDAnNDkuMiJF!5e0!3m2!1sid!2sid!4v1783405782259!5m2!1sid!2sid"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Maps;
