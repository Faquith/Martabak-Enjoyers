import React from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function Transaction({
  tampil,
  totalHarga,
  ongkir,
  totalBayar,
  tutupPopup,
  selesaikanPesanan,
  pesananSelesai,
}) {
  if (!tampil) return null;

  return (
    <div className="transaction-overlay" onClick={tutupPopup}>
      <div className="transaction-popup" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close" onClick={tutupPopup} aria-label="Tutup">
          <FaTimes />
        </button>

        {!pesananSelesai ? (
          <>
            <h2>Pembayaran QRIS</h2>

            <div className="rincian-bayar">
              <div className="rincian-baris">
                <span>Subtotal Produk</span>
                <span>{formatRupiah(totalHarga)}</span>
              </div>
              <div className="rincian-baris">
                <span>Ongkir (Area Pekalongan)</span>
                <span>{formatRupiah(ongkir)}</span>
              </div>
              <div className="rincian-baris rincian-total">
                <span>Total Pembayaran</span>
                <span>{formatRupiah(totalBayar)}</span>
              </div>
            </div>

            <div className="qris-wrapper">
              <img src="/qris.png" alt="Kode QRIS pembayaran" />
            </div>
            <p className="info-qris">
              Silakan scan QRIS untuk menyelesaikan pembayaran
            </p>
            <p className="info-qris-sub">Pesanan Anda sedang diproses</p>
            <button className="btn-konfirmasi" onClick={selesaikanPesanan}>
              Saya Sudah Membayar
            </button>
          </>
        ) : (
          <div className="pesanan-sukses">
            <FaCheckCircle className="icon-sukses" />
            <h2>Terima Kasih!</h2>
            <p>
              Pesanan Anda telah kami terima dan sedang diproses oleh dapur
              kami.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Transaction;
