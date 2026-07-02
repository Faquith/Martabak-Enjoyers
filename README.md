# Martabak Nusantara 🥞

Website Toko Martabak (Martabak Biasa & Martabak Manis) dibangun dengan React + Vite (JavaScript).

## Struktur Folder

```
martabak-nusantara/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── products.js
    └── components/
        ├── Navbar.jsx
        ├── Header.jsx
        ├── Slider.jsx
        ├── VideoSection.jsx
        ├── BestSeller.jsx
        ├── FeaturedProducts.jsx
        ├── Keranjang.jsx
        ├── Transaction.jsx
        ├── Maps.jsx
        ├── SocialMedia.jsx
        └── Footer.jsx
```

## Cara Menjalankan

```bash
npm install
npm run dev
```

Lalu buka URL yang ditampilkan di terminal (biasanya http://localhost:5173).

## Catatan

- Semua gambar produk memakai placeholder (placehold.co) — ganti `gambar` di `src/data/products.js` dengan URL foto asli produk Anda.
- Video di `VideoSection.jsx` memakai placeholder `VIDEO_ID` — ganti dengan ID video YouTube proses pembuatan martabak (±45 detik).
- Gambar QRIS di `Transaction.jsx` juga placeholder — ganti dengan QRIS asli toko Anda.
- Nomor WhatsApp di `SocialMedia.jsx` masih contoh — ganti dengan nomor toko Anda.
- Lokasi Google Maps sudah diarahkan ke "Pekalongan, Jawa Tengah, Indonesia".
- Kolom NIM di Footer sengaja dikosongkan agar diisi manual.

## Fitur

- Navbar sticky dengan menu Beranda, Best Seller, Produk Unggulan, Keranjang, Lokasi, Kontak
- Search bar produk real-time
- Dark mode toggle
- Slider/carousel React murni (tanpa jQuery)
- Video embed YouTube
- Best Seller & Produk Unggulan (masing-masing 6+ produk)
- Keranjang belanja dengan useState (tambah, hapus, hitung total)
- Popup checkout dengan QRIS yang hanya muncul setelah tombol Checkout ditekan
- Notifikasi toast saat produk ditambahkan ke keranjang
- Loading animation saat aplikasi pertama dibuka
- Google Maps embed lokasi Pekalongan
- Ikon sosial media (YouTube, Instagram, TikTok, Facebook, WhatsApp) via react-icons
- Desain responsif untuk mobile & desktop, tema kuning-coklat-cream
