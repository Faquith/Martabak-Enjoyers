import React from 'react'
import { FaTrash } from 'react-icons/fa'

function formatRupiah(angka) {
  return 'Rp' + angka.toLocaleString('id-ID')
}

function Keranjang({ keranjang, hapusItem, totalHarga, totalItem, ongkir, ppn, totalBayar, mulaiCheckout }) {
  return (
    <section id="keranjang" className="keranjang-section">
      <h2 className="section-title">Keranjang Saya</h2>

      {keranjang.length === 0 ? (
        <p className="keranjang-kosong">Keranjang masih kosong. Yuk pilih martabak favoritmu! 🛒</p>
      ) : (
        <div className="keranjang-wrapper">
          <div className="keranjang-list">
            {keranjang.map((item) => (
              <div className="keranjang-item" key={item.id}>
                <img src={item.gambar} alt={item.nama} />
                <div className="keranjang-item-info">
                  <h4>{item.nama}</h4>
                  <p>{item.jumlah} x {formatRupiah(item.harga)}</p>
                  <strong>{formatRupiah(item.harga * item.jumlah)}</strong>
                </div>
                <button className="btn-hapus" onClick={() => hapusItem(item.id)} aria-label="Hapus item">
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="keranjang-ringkasan">
            <h3>Ringkasan Pesanan</h3>
            <div className="ringkasan-baris">
              <span>Jumlah Item</span>
              <span>{totalItem}</span>
            </div>
            <div className="ringkasan-baris">
              <span>Subtotal</span>
              <span>{formatRupiah(totalHarga)}</span>
            </div>
            <div className="ringkasan-baris">
              <span>PPN 10%</span>
              <span>{formatRupiah(ppn)}</span>
            </div>
            <div className="ringkasan-baris">
              <span>Ongkir (Area Pekalongan)</span>
              <span>{formatRupiah(ongkir)}</span>
            </div>
            <div className="ringkasan-baris total">
              <span>Total Bayar</span>
              <span>{formatRupiah(totalBayar)}</span>
            </div>
            <button className="btn-checkout" onClick={mulaiCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Keranjang
