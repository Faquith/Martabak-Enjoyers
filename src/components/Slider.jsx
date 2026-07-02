import React, { useEffect, useRef, useState } from "react";

const SLIDE_DATA = [
  { src: "/img/martabak1.jpg", label: "Martabak Manis Coklat Keju" },
  { src: "/img/martabak2.jpg", label: "Martabak Telur Spesial" },
  { src: "/img/martabak3.jpg", label: "Martabak Manis Kacang Susu" },
  { src: "/img/martabak4.jpg", label: "Martabak Manis Green Tea" },
  { src: "/img/martabak5.jpg", label: "Martabak Telur Jumbo" },
];

const TAB_HEIGHT = 27; // tinggi thumbnail navigator (px)

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
  const wrapperRef = useRef(null); // ref ke div pembungkus section
  const sliderRef = useRef(null); // ref ke div #slider1_container
  const instanceRef = useRef(null); // ref ke instance Jssor

  // Ukuran aktual slider dihitung secara reaktif
  const [ukuran, setUkuran] = useState({ lebar: 960, tinggiSlide: 540 });

  // Hitung ulang ukuran setiap kali lebar wrapper berubah
  useEffect(() => {
    if (!wrapperRef.current) return;

    const hitung = () => {
      const lebar = wrapperRef.current.clientWidth || 960;
      // 16:9 → tinggi area gambar = lebar × 9/16
      const tinggiSlide = Math.round((lebar * 9) / 16);
      setUkuran({ lebar, tinggiSlide });

      // Scale ulang Jssor kalau sudah diinisialisasi
      if (instanceRef.current?.$ScaleWidth) {
        instanceRef.current.$ScaleWidth(lebar);
      }
    };

    hitung();
    const ro = new ResizeObserver(hitung);
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  // Inisialisasi Jssor setelah ukuran pertama kali diset
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

        // Scale awal sesuai lebar wrapper
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
  const tinggiTotal = tinggiSlide + TAB_HEIGHT; // total = gambar + tab navigator

  return (
    <section className="slider-section">
      <h2 className="section-title">Promo Spesial</h2>

      {/* Wrapper responsif — lebar mengikuti section */}
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
          {/* Slides Container */}
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
              <div key={slide.src}>
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
                <div u="thumb">{slide.label}</div>
              </div>
            ))}
          </div>

          {/* Thumbnail Navigator */}
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
