import React from "react";

function VideoSection() {
  return (
    <section className="video-section">
      <h2 className="section-title">Proses Pembuatan Martabak</h2>
      <p className="section-subtitle">
        Lihat bagaimana martabak kami dibuat langsung dari adonan segar hingga
        matang sempurna.
      </p>
      <div className="video-wrapper">
        {/* Ganti VIDEO_ID dengan ID video YouTube proses pembuatan martabak (durasi ± 45 detik) */}
        <iframe
          width="960"
          height="300"
          src="https://www.youtube.com/embed/ze2I_iRxTds"
          title="Proses Pembuatan Martabak"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default VideoSection;
