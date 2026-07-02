import React from 'react'
import { featuredProducts } from '../data/products'

function formatRupiah(angka) {
  return 'Rp' + angka.toLocaleString('id-ID')
}

function FeaturedProducts({ searchTerm, tambahKeKeranjang }) {
  const produkFiltered = featuredProducts.filter((p) =>
    p.nama.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="produk-unggulan" className="produk-section alt-bg">
      <h2 className="section-title">Produk Unggulan</h2>
      <p className="section-subtitle">Pilihan martabak unggulan dengan cita rasa istimewa, siap diantar untuk Anda.</p>

      {produkFiltered.length === 0 ? (
        <p className="no-result">Produk tidak ditemukan.</p>
      ) : (
        <div className="produk-grid">
          {produkFiltered.map((produk) => (
            <div className="produk-card" key={produk.id}>
              <img src={produk.gambar} alt={produk.nama} />
              <div className="produk-info">
                <h3>{produk.nama}</h3>
                <p>{produk.deskripsi}</p>
                <span className="harga">{formatRupiah(produk.harga)}</span>
                <button className="btn-tambah" onClick={() => tambahKeKeranjang(produk)}>
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default FeaturedProducts
