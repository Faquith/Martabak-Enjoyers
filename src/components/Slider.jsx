import React, { useEffect, useRef, useState } from "react";

// Gambar slider pakai gambar dari /public/img/ (sesuaikan nama file jika berbeda)
const SLIDE_DATA = [
  {
    src: "/img/martabak1.jpg",
    label: "Martabak Manis Coklat Keju",
    harga: 35000,
  },
  { src: "/img/martabak2.jpg", label: "Martabak Telur Spesial", harga: 30000 },
  {
    src: "/img/martabak3.jpg",
    label: "Martabak Manis Green Tea",
    harga: 38000,
  },
  {
    src: "/img/martabak4.jpg",
    label: "Martabak Telur Ayam",
    harga: 25000,
  },
  { src: "/img/martabak5.jpg", label: "Martabak Manis Original", harga: 22000 },
];

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

const TAB_HEIGHT = 27;

function muatScript(src) {
  return new Promise((resolve, reject) => {
    const sudahAda = document.querySelector(`script[src="${src}"]`);
    if (sudahAda) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Gagal memuat script: ${src}`));
    document.body.appendChild(script);
  });
}

function Slider() {
  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const instanceRef = useRef(null);
  const [ukuran, setUkuran] = useState({ lebar: 960, tinggiSlide: 540 });

  useEffect(() => {
    if (!wrapperRef.current) return;
    const hitung = () => {
      const lebar = wrapperRef.current.clientWidth || 960;
      const tinggiSlide = Math.round((lebar * 9) / 16);
      setUkuran({ lebar, tinggiSlide });
      if (instanceRef.current?.$ScaleWidth) {
        instanceRef.current.$ScaleWidth(lebar);
      }
    };
    hitung();
    const ro = new ResizeObserver(hitung);
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let dibatalkan = false;
    async function initSlider() {
      try {
        await muatScript("/js/jquery.min.js");
        await muatScript("/js/jssor.slider.mini.js");
        if (dibatalkan) return;

        const options = {
          $AutoPlay: true,
          $AutoPlaySteps: 1,
          $Idle: 4000,
          $PauseOnHover: 1,
          $ArrowKeyNavigation: true,
          $SlideDuration: 500,
          $MinDragOffsetToSlide: 20,
          $SlideSpacing: 5,
          $Cols: 1,
          $ParkingPosition: 0,
          $UISearchMode: 1,
          $PlayOrientation: 1,
          $DragOrientation: 3,
          $ThumbnailNavigatorOptions: {
            $Class: window.$JssorThumbnailNavigator$,
            $ChanceToShow: 2,
            $ActionMode: 1,
            $AutoCenter: 3,
            $Rows: 1,
            $SpacingX: 1,
            $SpacingY: 0,
            $Cols: 5,
            $ParkingPosition: 0,
            $Orientation: 1,
            $NoDrag: true,
          },
        };

        instanceRef.current = new window.$JssorSlider$(
          "slider1_container",
          options,
        );
        if (wrapperRef.current) {
          instanceRef.current.$ScaleWidth(wrapperRef.current.clientWidth);
        }
      } catch (err) {
        console.error(err);
      }
    }
    initSlider();
    return () => {
      dibatalkan = true;
      if (instanceRef.current?.$Destroy) instanceRef.current.$Destroy();
    };
  }, []);

  const { lebar, tinggiSlide } = ukuran;
  const tinggiTotal = tinggiSlide + TAB_HEIGHT;

  return (
    <section className="slider-section">
      <h2 className="section-title">Promo Spesial</h2>

      <div ref={wrapperRef} style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div
          id="slider1_container"
          ref={sliderRef}
          style={{
            position: "relative",
            width: `${lebar}px`,
            height: `${tinggiTotal}px`,
            background: "#fff",
            overflow: "hidden",
            borderRadius: "16px",
            boxShadow: "0 4px 14px rgba(75, 46, 30, 0.15)",
          }}
        >
          <div
            u="slides"
            style={{
              position: "absolute",
              left: 0,
              top: `${TAB_HEIGHT}px`,
              width: `${lebar}px`,
              height: `${tinggiSlide}px`,
              overflow: "hidden",
            }}
          >
            {SLIDE_DATA.map((slide) => (
              <div key={slide.src} style={{ position: "relative" }}>
                <img
                  src={slide.src}
                  alt={slide.label}
                  style={{
                    width: "100%",
                    height: `${tinggiSlide}px`,
                    objectFit: "cover",
                    objectPosition: "center center",
                    display: "block",
                  }}
                />
                {/* Overlay nama produk & harga */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(transparent, rgba(75,46,30,0.85))",
                    padding: "3rem 1.5rem 1.2rem",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "#fff",
                      fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
                      fontWeight: "bold",
                      textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
                    }}
                  >
                    {slide.label}
                  </p>
                  <p
                    style={{
                      margin: "0.3rem 0 0",
                      color: "#FFD700",
                      fontSize: "clamp(0.85rem, 2vw, 1.2rem)",
                      fontWeight: "700",
                      textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {formatRupiah(slide.harga)}
                  </p>
                </div>
                <div u="thumb">{slide.label}</div>
              </div>
            ))}
          </div>

          <div
            u="thumbnavigator"
            className="jssort14"
            style={{ left: 0, top: 0 }}
          >
            <div u="slides" style={{ cursor: "default", top: 0, left: 0 }}>
              <div u="prototype" className="p">
                <div className="w">
                  <div u="thumbnailtemplate" className="c"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
