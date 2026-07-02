import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

function SocialMedia() {
  const sosial = [
    {
      nama: "YouTube",
      icon: <FaYoutube />,
      href: "https://youtube.com/@laspro_id?si=oy0mGHnoOQDeqcBT",
      warna: "#FF0000",
    },
    {
      nama: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/faquith_/",
      warna: "#E1306C",
    },
    {
      nama: "TikTok",
      icon: <FaTiktok />,
      href: "https://www.tiktok.com/@laspro_id?_r=1&_t=ZS-97gzyGasRdd",
      warna: "#010101",
    },
    {
      nama: "Facebook",
      icon: <FaFacebook />,
      href: "https://www.facebook.com/faqih.babai.31/",
      warna: "#1877F2",
    },
    {
      nama: "WhatsApp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/6281994925368",
      warna: "#25D366",
    },
  ];

  return (
    <section id="kontak" className="sosial-section">
      <h2 className="section-title">Ikuti & Hubungi Kami</h2>
      <p className="section-subtitle">
        Jangan lewatkan promo terbaru, ikuti media sosial kami!
      </p>
      <div className="sosial-icons">
        {sosial.map((s) => (
          <a
            key={s.nama}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sosial-icon"
            style={{ "--warna-icon": s.warna }}
            aria-label={s.nama}
          >
            {s.icon}
            <span>{s.nama}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialMedia;
