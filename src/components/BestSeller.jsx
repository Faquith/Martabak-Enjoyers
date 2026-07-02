import React from "react";
import { bestSellerProducts } from "../data/products";

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function BestSeller({ searchTerm, tambahKeKeranjang }) {
  const produkFiltered = bestSellerProducts.filter((p) =>
    p.nama.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section id="best-seller" className="produk-section">
      <h2 className="section-title">Best Seller</h2>
      <p className="section-subtitle">
        Produk martabak paling laris dan paling banyak digemari pelanggan kami.
      </p>

      {produkFiltered.length === 0 ? (
        <p className="no-result">Produk tidak ditemukan.</p>
      ) : (
        <div className="produk-grid">
          {produkFiltered.map((produk) => (
            <div className="produk-card" key={produk.id}>
              <span className="badge-best">⭐ Best Seller</span>
              <img src={produk.gambar} alt={produk.nama} />
              <div className="produk-info">
                <h3>{produk.nama}</h3>
                <p>{produk.deskripsi}</p>
                <span className="harga">{formatRupiah(produk.harga)}</span>
                <button
                  className="btn-tambah"
                  onClick={() => tambahKeKeranjang(produk)}
                >
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default BestSeller;
