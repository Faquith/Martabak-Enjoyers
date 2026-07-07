import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Slider from "./components/Slider";
import VideoSection from "./components/VideoSection";
import BestSeller from "./components/BestSeller";
import FeaturedProducts from "./components/FeaturedProducts";
import Keranjang from "./components/Keranjang";
import Transaction from "./components/Transaction";
import Maps from "./components/Maps";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

const ONGKIR = 5000;

function App() {
  const [loading, setLoading]             = useState(true);
  const [userLogin, setUserLogin]         = useState(null);
  const [darkMode, setDarkMode]           = useState(false);
  const [searchTerm, setSearchTerm]       = useState("");
  const [keranjang, setKeranjang]         = useState([]);
  const [notifikasi, setNotifikasi]       = useState(null);
  const [popupCheckout, setPopupCheckout] = useState(false);
  const [pesananSelesai, setPesananSelesai] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const tampilkanNotifikasi = (pesan) => {
    setNotifikasi(pesan);
    setTimeout(() => setNotifikasi(null), 2200);
  };

  const tambahKeKeranjang = (produk) => {
    setKeranjang((prev) => {
      const sudahAda = prev.find((item) => item.id === produk.id);
      if (sudahAda) {
        return prev.map((item) =>
          item.id === produk.id ? { ...item, jumlah: item.jumlah + 1 } : item,
        );
      }
      return [...prev, { ...produk, jumlah: 1 }];
    });
    tampilkanNotifikasi(`${produk.nama} ditambahkan ke keranjang! 🛒`);
  };

  const hapusItem = (id) => {
    setKeranjang((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItem  = keranjang.reduce((acc, item) => acc + item.jumlah, 0);
  const totalHarga = keranjang.reduce((acc, item) => acc + item.harga * item.jumlah, 0);
  const ongkir     = keranjang.length > 0 ? ONGKIR : 0;
  const ppn        = Math.round(totalHarga * 0.1);
  const totalBayar = totalHarga + ppn + ongkir;

  const mulaiCheckout = () => {
    if (keranjang.length === 0) return;
    setPesananSelesai(false);
    setPopupCheckout(true);
  };

  const tutupPopup = () => {
    setPopupCheckout(false);
    setPesananSelesai(false);
  };

  const selesaikanPesanan = () => {
    setPesananSelesai(true);
    setTimeout(() => {
      setKeranjang([]);
      setPopupCheckout(false);
      setPesananSelesai(false);
    }, 2500);
  };

  const handleLogout = () => {
    setUserLogin(null);
    setKeranjang([]);
    tampilkanNotifikasi("Berhasil keluar. Sampai jumpa! 👋");
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-martabak">🥞</div>
        <p>Memuat Toko Martabak Nusantara...</p>
      </div>
    );
  }

  if (!userLogin) {
    return <Login onLogin={setUserLogin} />;
  }

  return (
    <div className="app">
      <Navbar
        jumlahKeranjang={totalItem}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        userLogin={userLogin}
        onLogout={handleLogout}
      />
      <Header />
      <Slider />
      <VideoSection />
      <BestSeller searchTerm={searchTerm} tambahKeKeranjang={tambahKeKeranjang} />
      <FeaturedProducts searchTerm={searchTerm} tambahKeKeranjang={tambahKeKeranjang} />
      <Keranjang
        keranjang={keranjang}
        hapusItem={hapusItem}
        totalHarga={totalHarga}
        totalItem={totalItem}
        ongkir={ongkir}
        ppn={ppn}
        totalBayar={totalBayar}
        mulaiCheckout={mulaiCheckout}
      />
      <Maps />
      <SocialMedia />
      <Footer />

      <Transaction
        tampil={popupCheckout}
        totalHarga={totalHarga}
        ongkir={ongkir}
        totalBayar={totalBayar}
        tutupPopup={tutupPopup}
        selesaikanPesanan={selesaikanPesanan}
        pesananSelesai={pesananSelesai}
      />

      {notifikasi && <div className="notifikasi-toast">{notifikasi}</div>}
    </div>
  );
}

export default App;
